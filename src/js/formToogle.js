let form = document.querySelector('.modal-form');
let modal = document.querySelector('.modal');
import { disableScroll } from "./disabledScroll.js";
import { inputsClear } from "./inputClear.js";

let inputUserName = form.querySelector('.modal-input-name')
let inputContactInformation = form.querySelector('.modal-input-contactInformation')

export function modalFormToggle() {
    modal.classList.toggle('modal-active')
    console.log(11);
    disableScroll()
    inputsClear([inputUserName, inputContactInformation])


}
