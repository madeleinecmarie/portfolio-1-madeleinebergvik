const closing = document.querySelector('.close');
const opening = document.querySelector('.open');
const navMenu = document.querySelector('.ul__elements');

opening.addEventListener('click', show);
closing.addEventListener('click', close);

function show() {
  navMenu.style.display = 'flex';
  navMenu.style.top = '-2%';
}

function close() {
  navMenu.style.top = '-120%';
}