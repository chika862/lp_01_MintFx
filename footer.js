document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <footer class="bg-accent text-white p-5">
      <div class="md:space-y-0 md:space-x-4 md:max-w-[1240px] md:mx-auto lg:px-0">
        <div class="flex flex-col md:flex-row md:justify-between">
          <img
            src="../images/logo.svg"
            alt="MINT TRADINGのロゴ"
            class="px-10 pt-10 md:px-0 md:w-[300px] md:pl-4"
          />
          <div
            class="flex flex-col font-bold md:flex-row w-1/2 md:w-auto mx-auto my-4 md:pt-14 text-center space-y-1 md:space-y-0 md:space-x-10 md:mr-0"
          >
            <a
              href="mailto:support@minttrading.com"
              class="underline underline-offset-4 decoration-white hover:text-blue-200 hover:decoration-blue-300 lg:text-sm"
            >support@minttrading.com</a>
            <a
              href="tel:03-1234-5678"
              class="underline underline-offset-4 decoration-white hover:text-blue-200 hover:decoration-blue-300 lg:text-sm"
            >03-1234-5678</a>
          </div>
        </div>
        <div class="border-t border-white my-6 md:pb-3 md:mt-3"></div>

        <nav class="footer-nav text-center lg:text-left lg:py-4">
          <ul
            class="flex flex-col md:flex-row font-bold space-y-3 lg:space-y-0 lg:space-x-12 text-[1rem]"
          >
            <li><a href="" class="hover:text-blue-200">トップページ</a></li>
            <li>
              会社概要
              <ul class="space-y-3">
                <li class="pt-3 font-normal text-[0.9rem]">
                  <a href="" class="hover:text-blue-200">MINT TRADINGとは?</a>
                </li>
                <li class="font-normal text-[0.9rem]">
                  <a href="" class="hover:text-blue-200">ライセンス</a>
                </li>
              </ul>
            </li>
            <li>
              トレード
              <ul class="space-y-3">
                <li class="pt-3 font-normal text-[0.9rem]">
                  <a href="" class="hover:text-blue-200">口座タイプ</a>
                </li>
                <li class="font-normal text-[0.9rem]">
                  <a href="" class="hover:text-blue-200">入出金方法</a>
                </li>
                <li class="font-normal text-[0.9rem]">
                  <a href="" class="hover:text-blue-200">プラットフォーム</a>
                </li>
              </ul>
            </li>
            <li class="w-full sm:w-auto">
              <a href="" class="hover:text-blue-200">アフィリエイト</a>
            </li>
            <li clasLogos="w-full sm:w-auto">
              <a href="" class="hover:text-blue-200">キャンペーン</a>
            </li>
          </ul>
        </nav>

        <div class="border-t border-white my-6 md:pb-3 md:mt-3"></div>
        <div class="lg:flex lg:justify-between lg:max-w-[1240px] lg:mx-auto relative">
          <div class="lg:w-[620px]">
            <p class="text-sm lg:text-[0.78rem]">
              <span class="font-extrabold">リスクに関する警告</span>:
              外国為替金取引やデリバティブ取引は高リスクを伴います。損失に耐えうる範囲の資金でお取引されることをお勧め致します。デリバティブ取引は全ての投資家に適しているわけではございません。取引に伴うリスクを充分に理解された上で、必要に応じて専門家にご相談ください。
            </p>
            <p class="text-sm mt-8 lg:text-[0.78rem]">
              <span class="font-extrabold">免責事項</span>: MINT
              TRADINGは、現地の法律または規制に反する可能性がある国・地域において、金融サービスの勧誘とみなされるいかなる行為も行っておりません。
            </p>
            <p class="text-sm lg:text-[0.78rem]">
              本ウェブサイト上の情報は、特定の国や地域に居住する方々を対象とするものではなく、投資助言、推奨、または金融サービスや投資活動への勧誘を構成するものではありません。<br />
              また、本ウェブサイトでは、ユーザーの利便性を向上させるために多言語翻訳機能を提供しています。<br />
              英語以外の言語への翻訳は、あくまで情報提供と利便性を目的としたものであり、特定の国や地域に居住する個人に対し、金融サービスを提供、推奨、または勧誘することを意図したものではありません。
            </p>
          </div>

          <div class="lg:w-[620px] lg:relative">
            <p class="mt-5 text-center lg:text-right lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
              &copy; 2025 MINT TRADING
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;

  const footer = document.createElement("div");
  footer.innerHTML = footerHTML.trim();
  document.body.appendChild(footer.firstChild);
});
