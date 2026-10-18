/* ==========================================================
   sections/shop.js — 천인샵 섹션: 오픈 알림 신청 버튼
   ========================================================== */
function initShop() {
  $("#notify").onclick = e => {
    e.preventDefault();
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("[천인샵] 오픈 알림 신청")}`;
  };
}
