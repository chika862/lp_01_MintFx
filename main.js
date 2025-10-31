const { animate, inView } = Motion;

// ------------------------------------
// 🔹 通常フェード（fade）
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade").forEach((el) => {
    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 1, easing: "ease-out" }
      );
    });
  });
});

// ------------------------------------
// 🔹 ゆっくりフェード（fade-slow）
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-slow").forEach((el) => {
    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], y: [40, 0] },
        { duration: 2.5, easing: "ease-out", delay: 1 }
      );
    });
  });
});

// ------------------------------------
// 🔹 左からフェードイン（fade-left）
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-left").forEach((el) => {
    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], x: [-40, 0] },
        { duration: 1.2, easing: "ease-out" }
      );
    });
  });
});

// ------------------------------------
// 🔹 右からフェードイン（fade-right）
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-right").forEach((el) => {
    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], x: [40, 0] },
        { duration: 1.2, easing: "ease-out" }
      );
    });
  });
});

// ------------------------------------
// 🔹 Swiper
// ------------------------------------
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ------------------------------------
// 🔹 ハンバーガーメニュー
// ------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const btn = document.querySelector(".toggle_btn");
  const mask = document.getElementById("mask");
  const openClass = "open";

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
