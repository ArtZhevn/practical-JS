const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });
        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }
        close.addEventListener('click', () => {
            closeModal();
            // document.body.classList.remove('model-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
                // document.body.classList.remove('model-open');
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            // document.body.classList.remove('model-open');
            }
        });
    }
        const showModalByTime = (selector, time) => {
            setTimeout(() => {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";
            }, time);
        }

        bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
        bindModal('.phone_link', '.popup', '.popup_close');
        // showModalByTime('.popup', 60000);
};

export default modals;

