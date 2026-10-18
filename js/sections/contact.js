/* ==========================================================
   sections/contact.js — 문의·구독 폼 (메일 앱으로 보내기)
   메일 주소는 js/config.js, 개인정보처리방침 문구는 js/data/privacy.js
   ========================================================== */
function sendMail(kind, needMsg) {
  const f = $("#form").elements;
  const n = f.n.value.trim(), e = f.e.value.trim(), m = f.m.value.trim();
  const box = $("#fmsg");

  const bad =
    !n ? "닉네임을 입력해 주세요." :
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e) ? "이메일 주소를 확인해 주세요." :
    (needMsg && !m) ? "협업문의 내용을 입력해 주세요." :
    !f.agree.checked ? "[필수] 개인정보처리방침에 동의해 주세요." : "";

  box.textContent = bad;
  if (bad) return;

  const body = `닉네임: ${n}\n이메일: ${e}\n광고성 정보 수신 동의: ${f.ad.checked ? "동의" : "미동의"}\n\n${m}`;
  location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("[닥터미나리 " + kind + "] " + n)}&body=${encodeURIComponent(body)}`;
}

function initContact() {
  // 하단 안내문의 메일 주소 표시
  const link = $("#mailLink");
  link.href = `mailto:${SITE.email}`;
  link.textContent = SITE.email;

  $("#subBtn").onclick = () => sendMail("칼럼구독", false);
  $("#mailBtn").onclick = () => sendMail("협업문의", true);
  $("#form").onsubmit = e => e.preventDefault();

  // 개인정보처리방침 팝업
  $("#pp").onclick = e => {
    e.preventDefault();
    openSheet(`<h2>${PRIVACY.title}</h2>` + PRIVACY.paragraphs.map(t => `<p>${t}</p>`).join(""));
  };
}
