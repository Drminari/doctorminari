/* ==========================================================
   sections/nav.js — 상단 메뉴: 다크모드 버튼 + D-DAY 카운터
   (설정값은 js/config.js 의 SITE.dday)
   ========================================================== */
function initNav() {
  // 화면 모드(라이트/다크) 전환
  $("#theme").onclick = () => {
    const r = document.documentElement;
    const isDark = r.dataset.theme === "dark" ||
      (!r.dataset.theme && matchMedia("(prefers-color-scheme:dark)").matches);
    r.dataset.theme = isDark ? "light" : "dark";
  };

  // D-DAY 카운터
  const [y, m, d] = SITE.dday.startDate.split("-").map(Number);
  const START = new Date(y, m - 1, d);
  function updateDday() {
    const n = new Date();
    const today = new Date(n.getFullYear(), n.getMonth(), n.getDate());
    const r = SITE.dday.total - Math.round((today - START) / 864e5);
    $("#dnum").textContent = r > 0 ? "D-" + r : r === 0 ? "D-DAY" : "D+" + (-r);
  }
  updateDday();
  setInterval(updateDday, 60000);
}
