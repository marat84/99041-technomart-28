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

(function () {
  var
    slider = document.querySelector(".js-slider");

  if (slider) {
    var
      sliderNav = slider.querySelector(".main-slider-nav"),
      sliderControl = slider.querySelector(".main-slider-control"),
      navButton = "slider-nav",
      controlNext = "control-next",
      controlPrev = "control-prev";

    var sliderRemoveClassActive = function () {
      slider.querySelector(".main-slider-item.active").classList.remove("active");
      sliderNav.querySelector(".active").classList.remove("active");
    };

    var arrowActiveSlider = function (nextActive, currentActive) {
      if (nextActive) {
        nextActive.classList.add("active");

        currentActive.classList.remove("active");
        sliderNav.querySelector(".active").classList.remove("active");

        sliderNav.querySelector("." + navButton + "[data-slider=\"#" + nextActive.id + "\"]").classList.add("active");
      }
    };

    sliderNav.addEventListener("click", function (evt) {
      var target = evt.target;

      if (target.classList.contains(navButton)) {
        evt.preventDefault();
        sliderRemoveClassActive();

        target.classList.add("active");
        slider.querySelector(target.dataset.slider).classList.add("active");
      }
    });

    sliderNav.addEventListener("keydown", function (evt) {
      var target = evt.target;

      if (target.classList.contains(navButton) && evt.keyCode === 13) {
        evt.preventDefault();
        sliderRemoveClassActive();

        target.classList.add("active");
        slider.querySelector(target.dataset.slider).classList.add("active");
      }
    });

    sliderControl.addEventListener("click", function (evt) {
      var
        target = evt.target,
        currentActive = slider.querySelector(".main-slider-item.active"),
        nextActive = (target.classList.contains(controlNext)) ? currentActive.nextElementSibling : currentActive.previousElementSibling;

      if (target.classList.contains(controlNext) || target.classList.contains(controlPrev)) {
        evt.preventDefault();

        arrowActiveSlider(nextActive, currentActive);
      }
    });

    sliderControl.addEventListener("keydown", function (evt) {
      var
        target = evt.target,
        currentActive = slider.querySelector(".main-slider-item.active"),
        nextActive = (target.classList.contains(controlNext)) ? currentActive.nextElementSibling : currentActive.previousElementSibling;

      if ((target.classList.contains(controlNext) || target.classList.contains(controlPrev)) && evt.keyCode === 13) {
        evt.preventDefault();

        arrowActiveSlider(nextActive, currentActive);
      }
    });
  }

})();

(function () {
  var
    tabItem = document.querySelector(".js-tab-item"),
    tabTarget = document.querySelector(".js-tab-target"),
    tabItemLink = "service-list-link",
    tabItemBox = "js-tab";

  if (tabItem) {
    var changeClassTabItem = function (target) {
      if (target.classList.contains(tabItemLink)) {
        tabItem.querySelector("." + tabItemLink + ".active").classList.remove("active");
        tabTarget.querySelector("." + tabItemBox + ".active").classList.remove("active");

        target.classList.add("active");
      }
    };

    var changeTab = function (target) {
      tabTarget.querySelector(target).classList.add("active");
    };

    tabItem.addEventListener("click", function (evt) {
      evt.preventDefault();

      var target = evt.target;

      changeClassTabItem(target);
      changeTab(target.dataset.tab);
    });

    tabItem.addEventListener("keydown", function (evt, index) {
      if (evt.keyCode === 13) {
        evt.preventDefault();

        var target = evt.target;

        changeClassTabItem(target);
        changeTab(target.dataset.tab);
      }
    });
  }
})();

(function () {
  var
    modalForm = document.querySelector(".modal-form");
  if (modalForm) {
    var
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
  }
})();
