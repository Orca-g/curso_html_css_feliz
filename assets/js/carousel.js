const btns = document.querySelectorAll('.main-carousel .button-arrow');
const elements = document.querySelector('.elements');
let pixels = 0;

for (const btn of btns) {
    btn.addEventListener('click', (e) => {
        const btnClass = e.target.getAttribute('class');
        const btnLeft = btnClass.includes('-left');
        const btnRight = btnClass.includes('-right');

        if (btnLeft) {
            pixels -= 250;
            elements.style.transform = `translateX(${pixels}px)`;
           

        } else if (btnRight) {
            pixels += 250;
            elements.style.transform = `translateX(${pixels}px)`;
           
        }
    });
}

// const btnLeft = document.querySelector('.-left');
// const btnRight = document.querySelector('.-right');
// const elements = document.querySelector('.elements');
// let pixels = 0;

// btnLeft.addEventListener('click', () => {
//     pixels -= 100;
//     elements.style.transform = `translateX(${pixels}px)`;
// });

// btnRight.addEventListener('click', () => {
//     pixels += 100;
//     elements.style.transform = `translateX(${pixels}px)`;
// });