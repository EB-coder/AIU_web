var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px"
}

// ------search-------------

// document.getElementById('search-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const query = document.getElementById('search-input').value;
//     fetch(`/search?query=${encodeURIComponent(query)}`)
//       .then(response => response.json())
//       .then(data => displayResults(data))
//       .catch(error => console.error('Error:', error));
//   });
  
//   function displayResults(results) {
//     const resultsContainer = document.getElementById('search-results');
//     resultsContainer.innerHTML = '';
//     if (results.length > 0) {
//       results.forEach(result => {
//         const resultItem = document.createElement('div');
//         resultItem.classList.add('result-item');
//         resultItem.innerHTML = `
//           <h3>${result.title}</h3>
//           <p>${result.description}</p>
//         `;
//         resultsContainer.appendChild(resultItem);
//       });
//     } else {
//       resultsContainer.innerHTML = '<p>No results found</p>';
//     }
//   }
  

document.addEventListener('DOMContentLoaded', function() {
    const langMenu = document.querySelector('.lang-menu');
    const selectedLang = langMenu.querySelector('.selected-lang');
    const dropdownMenu = langMenu.querySelector('ul');
    const links = langMenu.querySelectorAll('a');
  
    // Показать/скрыть выпадающее меню при клике на выбранный язык
    selectedLang.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  
    // Сменить флаг при клике на пункт меню
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const newFlagSrc = this.querySelector('img').src;
        selectedLang.querySelector('img').src = newFlagSrc;
        dropdownMenu.style.display = 'none';
      });
    });
  
    // Скрыть меню при клике вне его
    document.addEventListener('click', function(event) {
      if (!langMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });
