const closing = document.querySelector('.close');
const opening = document.querySelector('.open');
const navMenu = document.querySelector('.ul__elements');

opening.addEventListener('click', show);
closing.addEventListener('click', close);

function show() {
  navMenu.style.display = 'flex';
  navMenu.style.top = '-2%';
  navMenu.style.height = '180px';
}

function close() {
  navMenu.style.top = '-120%';
}