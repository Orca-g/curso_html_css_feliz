const buttons = document.querySelectorAll('.main-button');

for (const button of buttons) {
    button.addEventListener('mousedown', () => {
        button.style.boxShadow = '0px 0px 0px #000';
        button.style.transform = 'translate(5px, 5px)';
    })

    addEventListener('mouseup', () => {
        button.style.boxShadow = '5px 5px 0px #000';
        button.style.transform = 'translate(0px, 0px)';
    })
}
