console.log('сайт работает!');

// получение бургер-элемента из html
const nav_toggle = document.querySelector('.nav-toggle');

// получение меню из шапки сайта
const menu = document.getElementById('menu');

// добавление функции при клике на бургер меню
nav_toggle.addEventListener('click', () => {
  // скрытие / показ меню для мобильного меню
  menu.classList.toggle('active');
});
