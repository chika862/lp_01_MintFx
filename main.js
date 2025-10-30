//Motion
const { animate, scroll } = Motion;

// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const nav = document.getElementById("navArea");
  const btn = document.querySelector(".toggle_btn");
  const mask = document.getElementById("mask");
  const openClass = "open";

  // メインメニュー開閉
  btn.addEventListener("click", () => {
    body.classList.toggle(openClass);
  });
  mask.addEventListener("click", () => {
    body.classList.remove(openClass);
  });

  // 下層メニュー（アコーディオン）
  const submenuBtns = document.querySelectorAll(".submenu-btn");

  submenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const submenu = btn.nextElementSibling;
      const icon = btn.querySelector("i");

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
        icon.classList.remove("rotate-180");
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });
});
