export const tabs = ({ headerSelector, tabSelector, contentSelector, activeClass, display = 'block' }) => {
    const header = document.querySelector(headerSelector);
    const tabsArr = document.querySelectorAll(tabSelector);
    const contentArr = document.querySelectorAll(contentSelector);
    
    const hideTabContent = () => {
        contentArr.forEach(content => {
            content.style.display = 'none';
        });

        tabsArr.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    const showTabContent = (i = 0) => {
        contentArr[i].style.display = display;
        tabsArr[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tabsArr.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};
