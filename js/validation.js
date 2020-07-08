(function () {
  var
    modalForm = document.querySelector(".modal-form"),
    form = modalForm.querySelector(".js-form"),
    formName = form.querySelector("#order-name"),
    formMail = form.querySelector("#order-mail"),
    formMessage = form.querySelector("#order-message");

  form.addEventListener("submit", function (evt) {

    if (!formName.value || !formMail.value || !formMessage.value) {
      evt.preventDefault();

      modalForm.classList.remove("form-error");
      modalForm.offsetWidth = modalForm.offsetWidth;
      modalForm.classList.add("form-error");
    }
  })
})();
