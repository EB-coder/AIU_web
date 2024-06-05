var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px"
}

// -------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  const langMenu = document.querySelector('.lang-menu');
  const selectedLang = langMenu.querySelector('.selected-lang');
  const dropdownMenu = langMenu.querySelector('ul');

  // Получаем сохраненное состояние выпадающего меню
  const menuState = localStorage.getItem('menuState');
  if (menuState === 'open') {
      dropdownMenu.style.display = 'block';
  } else {
      dropdownMenu.style.display = 'none';
  }

  // Показать/скрыть выпадающее меню при клике на выбранный язык
  selectedLang.addEventListener('click', function() {
      if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
          localStorage.setItem('menuState', 'closed');
      } else {
          dropdownMenu.style.display = 'block';
          localStorage.setItem('menuState', 'open');
      }
  });

  // Скрыть меню при клике вне его
  document.addEventListener('click', function(event) {
      if (!langMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
          localStorage.setItem('menuState', 'closed');
      }
  });

  // Сменить флаг при клике на пункт меню
  langMenu.addEventListener('click', function(event) {
      if (event.target.tagName === 'IMG') {
          event.preventDefault();
          const newFlagSrc = event.target.src;
          selectedLang.querySelector('img').src = newFlagSrc;
          dropdownMenu.style.display = 'none';
          localStorage.setItem('menuState', 'closed');
      }
  });
});
