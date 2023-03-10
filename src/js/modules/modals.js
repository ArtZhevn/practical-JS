export const modals = () => {
    const bindModal = ({ triggerSelector, modalSelector, closeSelector, closeClickOverlay = true }) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');

        const closeWindows = () => {
            windows.forEach(window => {
                window.style.display = 'none';
            });
        };
        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        };

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                closeWindows();

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            closeWindows();
            
            closeModal();
            // document.body.classList.remove('model-open');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeWindows();
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

        bindModal({
            triggerSelector: '.popup_engineer_btn',
            modalSelector: '.popup_engineer', 
            closeSelector: '.popup_engineer .popup_close'
        });        
        bindModal({
            triggerSelector: '.phone_link', 
            modalSelector: '.popup',
            closeSelector: '.popup_close'
        });
        bindModal({
            triggerSelector: '.popup_calc_btn',
            modalSelector: '.popup_calc',
            closeSelector: '.popup_calc_close'
        });
        bindModal({
            triggerSelector: '.popup_calc_button',
            modalSelector: '.popup_calc_profile',
            closeSelector: '.popup_calc_profile_close',
            closeClickOverlay: false
        });
        bindModal({
            triggerSelector: '.popup_calc_profile_button',
            modalSelector: '.popup_calc_end',
            closeSelector: '.popup_calc_end_close',
            closeClickOverlay: false
        });
        showModalByTime('.popup', 60000);
};
