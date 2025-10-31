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

// const swiper = new Swiper(".swiper", {
//   direction: "horizontal",
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// ===================================
// 🏠 トップページ用
// ===================================

const mainSwiperEl = document.querySelector(".hero .swiper"); // トップページ固有のコンテナを使う例

if (mainSwiperEl) {
  const swiper = new Swiper(mainSwiperEl, {
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
}

// ===================================
// 📄 Aboutページ用
// ===================================
const aboutSwiperEl = document.getElementById("about-page-slider");

if (aboutSwiperEl) {
  const aboutSwiper = new Swiper(aboutSwiperEl, {
    direction: "horizontal", // 例としてhorizontal
    loop: false, // ループを無効に
    speed: 500,

    // Aboutページ独自のページネーション設定
    pagination: {
      el: ".about-page-slider .swiper-pagination", // 厳密なセレクタに変更
      type: "fraction", // 例: 分数表示
      clickable: false,
    },

    // ナビゲーションはトップページと同じセレクタを使用しますが、
    // スライダーIDの子要素として限定します。
    navigation: {
      nextEl: "#about-page-slider .swiper-button-next",
      prevEl: "#about-page-slider .swiper-button-prev",
    },
  });
}

//追加
const mySwiper = new Swiper(".card02 .swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  pagination: {
    el: ".card02 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".card02 .swiper-button-next",
    prevEl: ".card02 .swiper-button-prev",
  },
  breakpoints: {
    1025: {
      spaceBetween: 32,
    },
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

//footer

const footerHTML = `
  <div class="bg-accent text-white p-5">
    <div class="md:max-w-[1240px] md:mx-auto lg:px-0">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start pt-4 pb-6">
        <a href="/" class="mb-4 md:mb-0 md:w-[300px] md:pl-4">
          <img
            src="images/logo.svg" 
            alt="MINT TRADINGのロゴ"
            class="px-10 md:px-0 md:pt-0 mx-auto w-auto h-auto max-h-12"
          />
        </a>
        
        <div
          class="flex flex-col font-bold md:flex-row md:pt-4 text-center md:text-right space-y-1 md:space-y-0 md:space-x-8"
        >
          <a
            href="mailto:support@minttrading.com"
            class="underline underline-offset-4 decoration-white hover:text-blue-200 hover:decoration-blue-300 lg:text-sm"
            >support@minttrading.com</a
          >
          <a
            href="tel:03-1234-5678"
            class="underline underline-offset-4 decoration-white hover:text-blue-200 hover:decoration-blue-300 lg:text-sm"
            >03-1234-5678</a
          >
        </div>
      </div>
      
      <div class="border-t border-white my-6 md:pb-3 md:mt-3"></div>

      <nav class="footer-nav text-center lg:text-left lg:py-4">
        <ul
          class="flex flex-col md:flex-row font-bold space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12 text-base"
        >
          <li class="w-full md:w-auto"><a href="" class="hover:text-blue-200">トップページ</a></li>
          
          <li class="w-full md:w-auto">
            会社概要
            <ul class="space-y-1 pt-2">
              <li class="font-normal text-sm">
                <a href="" class="hover:text-blue-200">MINT TRADINGとは?</a>
              </li>
              <li class="font-normal text-sm">
                <a href="" class="hover:text-blue-200">ライセンス</a>
              </li>
            </ul>
          </li>
          
          <li class="w-full md:w-auto">
            トレード
            <ul class="space-y-1 pt-2">
              <li class="font-normal text-sm">
                <a href="" class="hover:text-blue-200">口座タイプ</a>
              </li>
              <li class="font-normal text-sm">
                <a href="" class="hover:text-blue-200">入出金方法</a>
              </li>
              <li class="font-normal text-sm">
                <a href="" class="hover:text-blue-200">プラットフォーム</a>
              </li>
            </ul>
          </li>
          
          <li class="w-full md:w-auto pt-4 md:pt-0">
            <a href="" class="hover:text-blue-200">アフィリエイト</a>
          </li>
          <li class="w-full md:w-auto">
            <a href="" class="hover:text-blue-200">キャンペーン</a>
          </li>
        </ul>
      </nav>

      <div class="border-t border-white my-6 md:pb-3 md:mt-6"></div>
      
      <div class="lg:flex lg:justify-between lg:items-end relative text-sm">
        <div class="lg:w-[60%] space-y-4">
          <p>
            <span class="font-extrabold">リスクに関する警告</span>:
            外国為替金取引やデリバティブ取引は高リスクを伴います。損失に耐えうる範囲の資金でお取引されることをお勧め致します。デリバティブ取引は全ての投資家に適しているわけではございません。取引に伴うリスクを充分に理解された上で、必要に応じて専門家にご相談ください。
          </p>
          <p>
            <span class="font-extrabold">免責事項</span>: MINT
            TRADINGは、現地の法律または規制に反する可能性がある国・地域において、金融サービスの勧誘とみなされるいかなる行為も行っておりません。
          </p>
          <p>
            本ウェブサイト上の情報は、特定の国や地域に居住する方々を対象とするものではなく、投資助言、推奨、または金融サービスや投資活動への勧誘を構成するものではありません。<br />
            また、本ウェブサイトでは、ユーザーの利便性を向上させるために多言語翻訳機能を提供しています。<br />
            英語以外の言語への翻訳は、あくまで情報提供と利便性を目的としたものであり、特定の国や地域に居住する個人に対し、金融サービスを提供、推奨、または勧誘することを意図したものではありません。
          </p>
        </div>

        <div class="lg:w-[40%] mt-5 lg:mt-0 lg:flex lg:justify-end">
          <p class="text-center lg:text-right">
            &copy; 2025 MINT TRADING
          </p>
        </div>
      </div>
    </div>
  </div>
`;

// DOMが完全にロードされた後に実行
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("footer-container");

  // innerHTMLで文字列を一括挿入
  if (container) {
    container.innerHTML = footerHTML;
  }
});
