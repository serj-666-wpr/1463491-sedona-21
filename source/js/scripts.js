// Mobile menu

const button = document.querySelector(".main-nav__button");
const menu = document.querySelector(".main-nav__list");

menu.classList.remove("main-nav__list--current");
button.classList.remove("main-nav__button--none");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("main-nav__button--close");
  menu.classList.toggle("main-nav__list--current");
});

// Modals

const modalSuccess = document.querySelector(".modal--success");
const modalFailure = document.querySelector(".modal--failure");
const modalOpen = document.querySelector(".review__button");
const modalCloseSuccess = document.querySelector(".modal__button--success");
const modalCloseFailure = document.querySelector(".modal__button--failure");
const inputName = document.querySelector(".input__field--name");
const inputSurname = document.querySelector(".input__field--surname");
const inputPhone = document.querySelector(".input__field--phone");
const inputEmail = document.querySelector(".input__field--email");

// Open

if (modalOpen) {
  modalOpen.addEventListener("click", function (evt) {
    if (inputName.value && inputSurname.value && inputPhone.value && inputEmail.value)
    {
      modalSuccess.classList.add("modal--current");
    } else {
      modalFailure.classList.add("modal--current");
      if (!inputName.value) {
        inputName.classList.add("input__field--invalid");
      }
      if (!inputSurname.value) {
        inputSurname.classList.add("input__field--invalid");
      }
      if (!inputPhone.value) {
        inputPhone.classList.add("input__field--invalid");
      }
      if (!inputEmail.value) {
        inputEmail.classList.add("input__field--invalid");
      }
    }
  });


// Close

  modalCloseSuccess.addEventListener("click", function (evt) {
    modalSuccess.classList.remove("modal--current");
  });

  modalCloseFailure.addEventListener("click", function (evt) {
    modalFailure.classList.remove("modal--current");
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27)
    {
      modalSuccess.classList.remove("modal--current");
      modalFailure.classList.remove("modal--current");
    }
  });
}
