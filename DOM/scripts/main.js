document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.js-button');
    button.addEventListener('click', ()=> {
        const inputWeight = document.querySelector('#input-weight');
        const inputHeight = document.querySelector('#input-height');
        const message = document.querySelector('.message');

        const result = Number(inputWeight.value) / (inputHeight.valeu) ^ 2
        message.textContent = 'Seu IMC é' + result;
    })
})