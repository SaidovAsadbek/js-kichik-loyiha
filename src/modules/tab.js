function tab(
    tabSelector,
    tabsContentSelector,
    tabsParentSelector,
    activeClass,
) {
    // Tabs
    const tabsParent = document.querySelector(tabsParentSelector),
        tabs = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector);

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;
        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, idx) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(idx);
                }
            });
        }
    });
}

export default tab;
