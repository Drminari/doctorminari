/* ==========================================================
   modal.js — 팝업(칼럼 읽기 · 개인정보처리방침) 공통 처리
   ========================================================== */
function openSheet(html) {
  $("#sheet").innerHTML = `<button class="x" id="x">닫기</button>${html}`;
  $("#dlg").showModal();
  $("#x").onclick = () => $("#dlg").close();
}

function initModal() {
  // 팝업 바깥(어두운 배경)을 누르면 닫기
  $("#dlg").onclick = e => { if (e.target.id === "dlg") e.target.close(); };
}
