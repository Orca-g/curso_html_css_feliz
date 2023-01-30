const btn = document.querySelector('#btn');

btn.addEventListener('mousedown', () => {
    btn.style.boxShadow = '0px 0px 0px #000';
    btn.style.transform = 'translate(5px, 5px)';
    })

addEventListener('mouseup', () => {
    btn.style.boxShadow = '5px 5px 0px #000';
    btn.style.transform = 'translate(0px, 0px)';
})