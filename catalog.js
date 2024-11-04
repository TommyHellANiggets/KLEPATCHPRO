document.addEventListener("DOMContentLoaded", function () {
    const dropdownButtons = document.querySelectorAll(".dropdown-button");
    const dropdownContents = document.querySelectorAll(".dropdown-content");
    const applyButtons = document.querySelectorAll(".apply-button");
  
    dropdownButtons.forEach((button, index) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const dropdownContent = dropdownContents[index];
  
            dropdownContents.forEach((content, idx) => {
                if (idx !== index) {
                    content.style.display = "none";
                    dropdownButtons[idx].classList.remove("active");
                }
            });
  
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
            button.classList.toggle("active");
        });
    });
    applyButtons.forEach((applyButton, index) => {
        applyButton.addEventListener("click", function () {
          dropdownContents[index].style.display = "none";
        });
      });
  
  
  
    // Настройка синхронизации диапазонов для цены
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const minPriceInput = document.getElementById("minPriceInput");
    const maxPriceInput = document.getElementById("maxPriceInput");
  
    minPrice.addEventListener("input", function () {
        minPriceInput.value = minPrice.value;
    });
  
    maxPrice.addEventListener("input", function () {
        maxPriceInput.value = maxPrice.value;
    });
  
    minPriceInput.addEventListener("input", function () {
        minPrice.value = minPriceInput.value;
    });
  
    maxPriceInput.addEventListener("input", function () {
        maxPrice.value = maxPriceInput.value;
    });
  });
  const button = document.getElementById('toggle-button');

  // Добавляем событие клика
  button.addEventListener('click', () => {
      // Переключаем класс 'active' при каждом нажатии
      button.classList.toggle('active');
  });

  const buttonfilter = document.getElementById('button-filter');
const dropdowcontainer = document.getElementById('dropdow-container');
const closebtn = document.getElementById('close-btn');
const buttonapplyfiltr  = document.getElementById('button-apply-filtr');
const overlay = document.getElementById('overlay');
const dropdowadaptivtitle = document.getElementById('dropdow-adaptiv-title');

buttonfilter.addEventListener('click', () => {
    // Проверяем наличие класса 'dropdown--active' у элемента dropdowcontainer
    if (!dropdowcontainer.classList.contains('dropdown--active')) {

        dropdowadaptivtitle.classList.add('dropdow-adaptiv-title');
        document.body.classList.toggle('no-scroll')
        overlay.classList.add('active');
        buttonapplyfiltr.classList.add('button-apply-filtr');
        closebtn.classList.add('close-btn');
        dropdowcontainer.classList.add('dropdown--active');
    } else {
        dropdowadaptivtitle.classList.remove('dropdow-adaptiv-title');
        overlay.classList.remove('active');
        buttonapplyfiltr.classList.remove('button-apply-filtr');
        closebtn.classList.remove('close-btn');
        dropdowcontainer.classList.remove('dropdown--active');
    }
});
closebtn.addEventListener('click', () => {
    dropdowadaptivtitle.classList.remove('dropdow-adaptiv-title');
    document.body.classList.remove('no-scroll')
    overlay.classList.remove('active');
    dropdowcontainer.classList.remove('dropdown--active');
    buttonapplyfiltr.classList.remove('button-apply-filtr');
});










