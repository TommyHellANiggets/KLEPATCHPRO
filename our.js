function toggleCatalog() {
    const catalog = document.getElementById('catalog');
    const button = document.querySelector('.header__catalog-button');

    // Проверяем текущее состояние каталога и переключаем его
    if (catalog.style.display === "none" || catalog.style.display === "") {
        catalog.style.display = "flex";
        button.classList.add('active');
    } else {
        catalog.style.display = "none";
        button.classList.remove('active');
    }
}


function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
}



const cartLink = document.querySelector('.cart-a');
const cartOverlay = document.querySelector('.cart__overlay');
const cartClose = document.querySelector('.cart__close');

cartLink.addEventListener('click', (e) => {
    e.preventDefault();
    cartOverlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

cartClose.addEventListener('click', closeCart);

cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
        closeCart();
    }
});

function closeCart() {
    cartOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}


document.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 0) {
      header.classList.remove('transparent');
      header.classList.add('white');
    } else {
      header.classList.remove('white');
      header.classList.add('transparent');
    }
  });
  
  // Инициализация состояния для заголовка при загрузке страницы
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    if (window.scrollY === 0) {
      header.classList.add('transparent');
    }
  });
  