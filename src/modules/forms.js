import { openModal, closeModal } from "./modal";
import { postData } from "../server/server";

function form(formSelector, modalTimerId) {
    // server Form
    const forms = document.querySelectorAll(formSelector);

    forms.forEach((form) => {
        BindPostData(form);
    });

    const msg = {
        // loading: "Loading...",
        loading: "img/loading.svg",
        success: "Thank's for submitting our form",
        failure: "Something went wrong",
    };

    function BindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // loading...
            const statusMessage = document.createElement("img");
            statusMessage.src = msg.loading;
            statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/request", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(msg.success);
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                })
                .catch(() => {
                    showThanksModal(msg.failure);
                })
                .finally(() => form.reset());
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");
        prevModalDialog.classList.add("hide");
        openModal(".modal", modalTimerId);

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
      </div>
    `;
        const appendNewModal = document.querySelector(".modal");
        appendNewModal.append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal(".modal");
        }, 4000);
    }
}

export default form;
