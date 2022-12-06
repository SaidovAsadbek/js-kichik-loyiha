import classFunction from "../modules/class";
import form from "../modules/forms";
import loader from "../modules/loader";
import modal, { openModal } from "../modules/modal";
import tab from "../modules/tab";
import timer from "../modules/timer";

window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        5000,
    );

    classFunction();
    form("form", modalTimerId);
    loader();
    modal("[data-modal]", ".modal", modalTimerId);
    tab(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active",
    );
    timer(".timer", "2022-12-31");
});

// window.addEventListener("DOMContentLoaded", () => {
//   // rest operator
//   // function logger(a, b, ...rest) {
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(rest);
//   // }
//   // logger(1, 2, 3, 4, 5, 6, 7);
//   // function calc(number, defaultNumber) {
//   //   defaultNumber = defaultNumber || 10;
//   //   // es6 < sukut rejimi deyiladi
//   //   // agar default number bo'lsa ushani oladi
//   //   console.log(number * defaultNumber);
//   // }

//   // calc(2);

//   // multipart/formData use
//   // function postData(form) {
//   //   form.addEventListener("submit", (e) => {
//   //     e.preventDefault();

//   //     const request = new XMLHttpRequest();
//   //     request.open("POST", "server.php");
//   //     // loading...
//   //     const statusMessage = document.createElement("div");
//   //     statusMessage.textContent = msg.loading;
//   //     form.append(statusMessage);

//   //     request.setRequestHeader("Content-Type", "multipart/form-data");
//   //     const formData = new FormData(form);

//   //     request.send(formData);

//   //     request.addEventListener("load", () => {
//   //       if (request.status == 200) {
//   //         console.log(request.response);
//   //         statusMessage.textContent = msg.success;
//   //         form.reset();
//   //         setTimeout(() => {
//   //           statusMessage.remove();
//   //         }, 2000);
//   //       } else {
//   //         statusMessage.textContent = msg.failure;
//   //       }
//   //     });
//   //   });
//   // }

//   // application/json use
//   // function postData(form) {
//   //   form.addEventListener("submit", (e) => {
//   //     e.preventDefault();

//   //     const request = new XMLHttpRequest();
//   //     request.open("POST", "server.php");
//   //     // loading...
//   //     // const statusMessage = document.createElement("div");
//   //     const statusMessage = document.createElement("img");
//   //     statusMessage.src = msg.loading;
//   //     statusMessage.style.cssText = `
//   //       display: block;
//   //       margin: 0 auto;
//   //     `;
//   //     form.insertAdjacentElement("afterend", statusMessage);
//   //     // statusMessage.textContent = msg.loading;
//   //     // form.append(statusMessage);

//   //     request.setRequestHeader("Content-Type", "application/json");

//   //     const obj = {};
//   //     const formData = new FormData(form);

//   //     formData.forEach((val, key) => {
//   //       obj[key] = val;
//   //     });

//   //     const json = JSON.stringify(obj);

//   //     request.send(json);

//   //     request.addEventListener("load", () => {
//   //       if (request.status == 200) {
//   //         console.log(request.response);
//   //         // statusMessage.textContent = msg.success;
//   //         showThanksModal(msg.success);
//   //         form.reset();
//   //         setTimeout(() => {
//   //           statusMessage.remove();
//   //         }, 2000);
//   //       } else {
//   //         // statusMessage.textContent = msg.failure;
//   //         showThanksModal(msg.failure);
//   //       }
//   //     });
//   //   });
//   // }

//   // fetch post method formData
//   // function postData(form) {
//   //   form.addEventListener("submit", (e) => {
//   //     e.preventDefault();

//   //     // loading...
//   //     const statusMessage = document.createElement("img");
//   //     statusMessage.src = msg.loading;
//   //     statusMessage.style.cssText = `
//   //       display: block;
//   //       margin: 0 auto;
//   //     `;
//   //     form.insertAdjacentElement("afterend", statusMessage);
//   //     form.append(statusMessage);

//   //     const formData = new FormData(form);
//   //     fetch("server.php", {
//   //       method: "POST",
//   //       body: formData,
//   //     })
//   //       .then((data) => data.text()) // json()
//   //       .then((data) => {
//   //         console.log(data);
//   //         showThanksModal(msg.success);
//   //         form.reset();
//   //         setTimeout(() => {
//   //           statusMessage.remove();
//   //         }, 2000);
//   //       })
//   //       .catch(() => {
//   //         showThanksModal(msg.failure);
//   //       });
//   //   });
//   // }

//   // fetch post method application/json
//   // function postData(form) {
//   //   form.addEventListener("submit", (e) => {
//   //     e.preventDefault();

//   //     // loading...
//   //     const statusMessage = document.createElement("img");
//   //     statusMessage.src = msg.loading;
//   //     statusMessage.style.cssText = `
//   //       display: block;
//   //       margin: 0 auto;
//   //     `;
//   //     form.insertAdjacentElement("afterend", statusMessage);
//   //     form.append(statusMessage);
//   //     const formData = new FormData(form);

//   //     const obj = {};
//   //     formData.forEach((val, key) => {
//   //       obj[key] = val;
//   //     });

//   //     fetch("server.php", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify(obj),
//   //     })
//   //       .then((data) => data.text()) // json()
//   //       .then((data) => {
//   //         console.log(data);
//   //         showThanksModal(msg.success);
//   //         form.reset();
//   //         setTimeout(() => {
//   //           statusMessage.remove();
//   //         }, 2000);
//   //       })
//   //       .catch(() => {
//   //         showThanksModal(msg.failure);
//   //       })
//   //       .finally(() => form.reset());
//   //   });
//   // }

//   // API Aplication programming interface
//   // fetch("https://jsonplaceholder.typicode.com/posts", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({ name: "Asadbek" }),
//   // })
//   //   .then((response) => response.json())
//   //   .then((json) => console.log(json));

//   // json-server

//   // regExp regular expresion // oddiy iboralar tarjimasi

//   // pattern shablon
//   // flags global qidirish functionlari
//   // new RegExp("pattern", "flags"); bu eski usuli

//   // bu yangi usuli
//   // /pattern/flag

//   // const firstName = prompt("What is your name?", "");

//   // const regex = /a/gi; // g bu global

//   // i bu katta harflarni kichik qiladi AAA aaa
//   // g global

//   // console.log(firstName.search(regex));
//   // console.log(firstName.match(regex));

//   //
//   // password hash
//   // const password = prompt("Your password", "");
//   // console.log(password.replace(/./g, "*")); // . bu hammanarsa fd1651f65d324.//./;;
//   // console.log(password.replace(/\|/g, "*")); // agar | bu busa \| quyilsa topadi

//   // const num = "12-32-32-4-3-4-43";

//   // console.log(num.replace(/-/g, "*"));

//   //
//   // const name = prompt("Name", "");

//   // const regexp = /bek/gi;

//   // console.log(regexp.test(name)); // name da mar degan suz busa true yoki false beradi

//   // \d sonlarni qidiradi
//   // \w world suz
//   // \s // space qidiradi

//   // \D not a number
//   // \W not a word
//   // \S not a space
//   // bunda match ishlatiladi

//   // if (regexp.test(name)) {
//   //   console.log("Welcome Asadbek");
//   // } else {
//   //   console.log("You are not admin!!");
//   // }
// });
