document.querySelector('.header').classList.remove('header--nojs');
document.querySelector('.menu-nav').classList.remove('menu-nav--nojs');
document.querySelector('.contacts__maps').classList.remove('contacts__maps--nojs');

document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.menu-nav__list').classList.toggle('active');
  document.querySelector('.menu-nav__toggle').classList.toggle('active');
});
