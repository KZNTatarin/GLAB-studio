'use strict';

const hamb = document.querySelector('.hamb');
const popup = document.querySelector('.popup');
const menu = document.querySelector('.menu').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle('open');
    body.classList.toggle('noscroll');
    renderPopup();
};

function renderPopup() {
    popup.appendChild(menu);
};