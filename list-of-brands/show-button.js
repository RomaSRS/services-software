'use strict';
let btn = document.querySelector('.expand-btn');
let frame = document.querySelector('.slide');

btn.addEventListener('click', switchVisibility);
btn.addEventListener('keydown', keyDetect);
btn.addEventListener('touchstart', switchVisibility);

function switchVisibility() {
    frame.classList.toggle('slide_maxHeight--none');
    btn.classList.toggle('expand-btn_rotated');
    if (frame.classList.contains('slide_maxHeight--none')) {
      btn.innerText = 'Скрыть';
    } else btn.innerText = 'Показать все';
};

function keyDetect(evt) {
    if (evt.code === 'space') switchVisibility();
}