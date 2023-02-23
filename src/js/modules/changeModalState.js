import { checkNumInputs } from "./checkNumInputs";

export const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidths = document.querySelectorAll('#width');
    const windowHeights = document.querySelectorAll('#height');
    const windowTypes = document.querySelectorAll('#view_type'); // ?
    const windowProfiles = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event, elems, prop) => {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        // if (elem.getAttribute('type') === 'radio') {
                        //     state[prop] = i === 0 ? 'Холодное' : state[prop] = 'Тёплое';
                        // } else {
                            state[prop] = elem.value;
                        // }
                        break;
                    case 'SELECT':
                        state[prop] = elem.value;
                        break;
                }

                console.log(state);
            });
        });
    };

    bindActionToElems('click', windowForms, 'form');
    bindActionToElems('input', windowHeights, 'height');
    bindActionToElems('input', windowWidths, 'width');
    bindActionToElems('change', windowTypes, 'type');
    bindActionToElems('change', windowProfiles, 'profile');
};