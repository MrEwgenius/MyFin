
import { GetUserInfo } from "./constructor.js"
import { disableScroll } from "./disabledScroll.js"
import { inputsClear } from "./inputClear.js"

let modal = document.querySelector('.modal')
let form = document.querySelector('.modal-form')
let closeModalButton  = form.querySelector('.modal-close')
let openModalButtons  = document.querySelectorAll('.apply-btn')
let inputUserName = form.querySelector('.modal-input-name')
let inputContactInformation = form.querySelector('.modal-input-contactInformation')

function modalFormToggle() {
    modal.classList.toggle('modal-active')
    disableScroll()
    inputsClear([inputUserName, inputContactInformation])

}
openModalButtons .forEach((btn) => {
    btn.addEventListener('click', () => {
        modalFormToggle()
    })


})



modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modalFormToggle()
    }
})
inputUserName.addEventListener('keyup', () => {

})

form.addEventListener('submit', getData)

function getData(e) {

    e.preventDefault()
    if (inputUserName.value && inputContactInformation.value) {
        let data = new GetUserInfo(inputUserName.value.trim(), inputContactInformation.value.trim())
        console.log(data);
        $.ajax({
            url: 'apply.php',
            type: 'POST',
            dataType: 'json',
            data: {
                inputUserName: inputUserName.value.trim(),
                inputContactInformation: inputContactInformation.value.trim()
            },
            success: function (response) {
                modalFormToggle()
                alert(response.message);
                console.log(response.data);
                inputsClear([inputUserName, inputContactInformation])
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error:', textStatus, errorThrown);
            }
        });
    } else {
        alert('Пожалуйста, заполните все поля.')
    }



}
closeModalButton .addEventListener('click', modalFormToggle)