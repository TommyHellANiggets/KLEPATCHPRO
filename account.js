const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalTitle = document.getElementById('modalTitle');

openModalBtn.onclick = () => {
    modal.style.display = 'block';
};

closeModalBtn.onclick = () => {
    modal.style.display = 'none';
};



const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const resetForm = document.getElementById('resetForm');
const resetSuccess = document.getElementById('resetSuccess');
const newPasswordForm = document.getElementById('newPasswordForm');
const resetPasswordLink = document.getElementById('resetPasswordLink');
const createNewPasswordBtn = document.getElementById('createNewPassword');

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





