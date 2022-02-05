// create tabs
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContent = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContent.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// create accordion

const accordion = document.querySelectorAll(".box-accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// menu navigation

const navigation = document.querySelector(".menu-navigation");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
    menuToggle.setAttribute("data-expanded", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
    menuToggle.setAttribute("data-expanded", false);
  }
});

// scroll navigation

const scrollHeader = document.querySelector("header");

window.addEventListener("scroll", () => {
  scrollHeader.classList.toggle("active", this.scrollY > 80);
});
