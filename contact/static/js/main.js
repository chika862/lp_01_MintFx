$(function() {
  // ナビゲーションのアコーディオン機能
  $('.g-nav .has-submenu > a').on('click', function(e) {
    // リンクのデフォルト動作（ページ遷移）をキャンセル
    e.preventDefault();

    // クリックされたメニューの親要素(li)に 'submenu-open' クラスを付けたり消したりする
    $(this).parent().toggleClass('submenu-open');
    
    // クリックされたaタグのすぐ後ろにある .submenu をスライドで開閉する
    $(this).next('.submenu').slideToggle();
  });
});


// ハンバーガーメニューの開閉
$(function() {
  $('.hamburger').on('click', function() {
    $('body').toggleClass('nav-open');
  });
});