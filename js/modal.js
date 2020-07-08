"use strict";

(function () {
  var
    modalButton = "js-modal-button",
    modalClose = "js-modal-close",
    mainContent = document.querySelector(".js-search-button");

  var modalBasketClickHandler = function (evt) {
    var target = evt.target;

    if (target.classList.contains(modalClose)) {
      var modalID = target.dataset.modal;
      closeModal(modalID);
    }
  };

  var mainContentClickHandler = function (evt) {

    var target = evt.target;

    if (target.classList.contains(modalButton)) {
      evt.preventDefault();
      var modalID = target.dataset.modal;
      openModal(modalID);
    }
  };

  var mainContentKeyDownHandler = function (evt) {
    var target = evt.target;

    if (target.classList.contains(modalButton) && evt.keyCode === 13) {
      evt.preventDefault();

      var modalID = target.dataset.modal;

      openModal(modalID);
    }
  };

  var closeModal = function (ID) {
    var modalBasket = document.querySelector(ID);

    modalBasket.classList.remove("modal-show");

    modalBasket.removeEventListener("click", modalBasketClickHandler);
    window.removeEventListener("keydown", windowKeyDownHandler);
  };

  var windowKeyDownHandler = function (evt) {
    if (evt.keyCode === 27) {
      var modalID = "#" + document.querySelector(".modal-show").id;

      closeModal(modalID);
    }
  };

  var openModal = function (ID) {
    var
      modalBasket = document.querySelector(ID),
      modalInputs = modalBasket.querySelectorAll("input");

    modalBasket.classList.add("modal-show");

    if (modalInputs.length > 0) {
      modalInputs[0].focus();
    }

    modalBasket.addEventListener("click", modalBasketClickHandler);

    window.addEventListener("keydown", windowKeyDownHandler);
  };

  mainContent.addEventListener("click", mainContentClickHandler);
  mainContent.addEventListener("keydown", mainContentKeyDownHandler);
})();
