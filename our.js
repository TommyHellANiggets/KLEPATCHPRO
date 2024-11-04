function toggleCatalog() {
  const catalog = document.getElementById('catalog');
  const button = document.querySelector('.header__catalog-button');

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
  const isMobile = window.innerWidth <= 768; // Проверка ширины окна

  if (isMobile) {
      // Если мобильный, переключаем видимость контейнера поиска
      const searchContainer = document.querySelector('.search-mobile__container');
      searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
  } else {
      // Если на десктопе, просто переключаем класс активности
      searchBar.classList.toggle('active');
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.querySelector('.burger__toggle');
  const burgerMenu = document.querySelector('.burger-menu');
  const body = document.body;
  const burgerIcon = burgerToggle.querySelector('.burger-icon');
  const closeIcon = burgerToggle.querySelector('.close-icon');

  burgerToggle.addEventListener('click', (e) => {
      e.preventDefault();
      burgerMenu.classList.toggle('active');

      if (burgerMenu.classList.contains('active')) {
          body.classList.add('no-scroll'); // Блокируем прокрутку страницы
          burgerIcon.style.display = 'none'; // Скрываем бургер-иконку
          closeIcon.style.display = 'block'; // Показываем иконку закрытия
      } else {
          body.classList.remove('no-scroll'); // Разрешаем прокрутку
          burgerIcon.style.display = 'block'; // Показываем бургер-иконку
          closeIcon.style.display = 'none'; // Скрываем иконку закрытия
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.catalog__mobile-button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const list = button.nextElementSibling;

          if (list && list.classList.contains('catalog__mobile-button__list')) {
              buttons.forEach(btn => {
                  const otherList = btn.nextElementSibling;
                  if (btn !== button && otherList && otherList.classList.contains('active')) {
                      btn.classList.remove('active');
                      otherList.classList.remove('active');
                  }
              });

              button.classList.toggle('active');
              list.classList.toggle('active');
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.catalog-mobile__toggle');
  const overlay = document.querySelector('.catalog-mobile');
  const closeButton = document.querySelector('.close-catalog');

  toggleButton.addEventListener('click', function() {
      overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
          overlay.classList.remove('active');
      }
  });

  closeButton.addEventListener('click', function() {
      overlay.classList.remove('active');
  });
});

// Toggle search container on search button click
document.querySelector('.search-mobile').addEventListener('click', () => {
  const searchContainer = document.querySelector('.search-mobile__container');
  searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
  document.body.style.overflow = searchContainer.style.display === 'block' ? 'hidden' : 'auto'; // Prevent scrolling when open
});

// Toggle burger menu on burger button click
document.querySelector('.burger-mobile').addEventListener('click', () => {
  const burgerMenu = document.querySelector('.menu'); // Replace '.menu' with the actual burger menu element selector
  burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
  document.body.style.overflow = burgerMenu.style.display === 'block' ? 'hidden' : 'auto'; // Prevent scrolling when open
});
  