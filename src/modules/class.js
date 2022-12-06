function classFunction() {
    // Class
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 11000;
            this.chageToUZS();
        }

        chageToUZS() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname),
                );
            }

            element.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
        </div>
      `;

            this.parent.append(element);
        }
    }

    async function getResource(url) {
        const res = await fetch(url);
        return await res.json();
    }

    getResource("http://localhost:3000/menu").then((data) => {
        data.forEach(({ img, altImg, title, descr, price, parent }) => {
            new MenuCard(img, altImg, title, descr, price, parent).render();
        });
    });
}

export default classFunction;
