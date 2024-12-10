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
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
      const searchContainer = document.querySelector('.search-mobile__container');
      searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
  } else {
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
          body.classList.add('no-scroll'); 
          burgerIcon.style.display = 'none'; 
          closeIcon.style.display = 'block';
      } else {
          body.classList.remove('no-scroll'); 
          burgerIcon.style.display = 'block'; 
          closeIcon.style.display = 'none'; 
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

document.querySelector('.search-mobile').addEventListener('click', () => {
  const searchContainer = document.querySelector('.search-mobile__container');
  searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
  document.body.style.overflow = searchContainer.style.display === 'block' ? 'hidden' : 'auto'; 
});

document.querySelector('.burger-mobile').addEventListener('click', () => {
  const burgerMenu = document.querySelector('.menu'); 
  burgerMenu.style.display = burgerMenu.style.display === 'block' ? 'none' : 'block';
  document.body.style.overflow = burgerMenu.style.display === 'block' ? 'hidden' : 'auto'; 
});
  



const modal = document.getElementById('modal');
const openModalBtns = document.querySelectorAll('.openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');
const overlay1 = document.getElementById('overlay1');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.classList.toggle('no-scroll1');
        overlay1.classList.add('active');
    });
});

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll1')
    overlay1.classList.remove('active');
};



const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const resetForm = document.getElementById('resetForm');
const resetSuccess = document.getElementById('resetSuccess');
const newPasswordForm = document.getElementById('newPasswordForm');
const resetPasswordLink = document.getElementById('resetPasswordLink');
const createNewPasswordBtn = document.getElementById('createNewPasswordBtn');
const formswitch =  document.getElementById('formswitch');

function updateTitle(title) {
    modalTitle.textContent = title;
}

loginBtn.onclick = () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    resetForm.classList.add('hidden');
    resetSuccess.classList.add('hidden');
    newPasswordForm.classList.add('hidden');
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    updateTitle('Вход в личный кабинет');
};

registerBtn.onclick = () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    resetForm.classList.add('hidden');
    resetSuccess.classList.add('hidden');
    newPasswordForm.classList.add('hidden');
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    updateTitle('Регистрация на сайте');
};

resetPasswordLink.onclick = (event) => {
    event.preventDefault();
    resetForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    resetSuccess.classList.add('hidden');
    newPasswordForm.classList.add('hidden');
    updateTitle('Восстановление пароля');
    formswitch.classList.add('hidden');
};

document.getElementById('submitReset').onclick = (event) => {
    event.preventDefault();
    resetForm.classList.add('hidden');
    resetSuccess.classList.remove('hidden');
};

createNewPasswordBtn.onclick = () => {
    resetSuccess.classList.add('hidden');
    newPasswordForm.classList.remove('hidden');
    updateTitle('Введите новый пароль');
};


function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.header__clients-button');
    const dropbox = document.querySelector('.dropbox');

    button.addEventListener('click', () => {
        if (dropbox.style.display === 'none' || !dropbox.style.display) {
            dropbox.style.display = 'flex';
        } else {
            dropbox.style.display = 'none';
        }
    });
});