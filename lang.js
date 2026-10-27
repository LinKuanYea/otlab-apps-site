// 語言切換：預設依瀏覽器語言，中文以外顯示英文；可用按鈕切換，也可用 ?lang=en / ?lang=zh 指定。
// 不使用 cookie，也不送出任何資料；只在瀏覽器本機記住選擇。
(function () {
  var html = document.documentElement;

  function apply(lang) {
    html.lang = lang === "en" ? "en" : "zh-Hant";
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.textContent = lang === "en" ? "中文" : "English";
  }

  var chosen = null;
  try {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "zh") chosen = q;
  } catch (e) {}
  if (!chosen) {
    try { chosen = localStorage.getItem("lang"); } catch (e) {}
  }
  if (!chosen) {
    var nav = (navigator.language || "zh").toLowerCase();
    chosen = nav.indexOf("zh") === 0 ? "zh" : "en";
  }
  apply(chosen);

  document.addEventListener("click", function (ev) {
    var t = ev.target;
    if (!t.classList || !t.classList.contains("lang-toggle")) return;
    var next = html.lang === "en" ? "zh" : "en";
    apply(next);
    try { localStorage.setItem("lang", next); } catch (e) {}
  });
})();
