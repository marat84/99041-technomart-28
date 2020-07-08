"use strict";

(function () {
  var
    tabItem = document.querySelector(".js-tab-item"),
    tabTarget = document.querySelector(".js-tab-target"),
    tabItemLink = "service-list-link",
    tabItemBox = "js-tab";

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
})();
