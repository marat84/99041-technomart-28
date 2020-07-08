"use strict";

(function () {
  var
    slider = document.querySelector(".js-slider"),
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

})();
