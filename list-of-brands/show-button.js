'use strict';
let btn = document.querySelector('.expand-btn');
let frame = document.querySelector('.slide');

btn.addEventListener('click', toggleVisibility);
btn.addEventListener('keydown', keyDetect);
btn.addEventListener('touchstart', toggleVisibility);

function toggleVisibility() {
    frame.classList.toggle('slide_maxHeight--none');
    btn.classList.toggle('expand-btn_rotated');
    if (frame.classList.contains('slide_maxHeight--none')) {
        btn.innerText = 'Скрыть';
    } else btn.innerText = 'Показать все';
};

function keyDetect(evt) {
    if (evt.code === 'space') toggleVisibility();
}