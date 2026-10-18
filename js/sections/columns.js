/* ==========================================================
   sections/columns.js — 칼럼 섹션 동작
   (카테고리 소개 · 필터 칩 · 검색 · 카드 목록 · 읽기 팝업)
   칼럼 내용 자체는 js/data/posts-*.js 에서 관리합니다.
   ========================================================== */
let currentCategory = "all";

// 카테고리 필터를 바꾸고 칼럼 섹션으로 스크롤
function pickCategory(k) {
  currentCategory = k;
  renderColumns();
  $("#columns").scrollIntoView();
}

// 카드 목록 그리기
function renderColumns() {
  const q = $("#q").value.trim().toLowerCase();
  const list = POSTS.filter(p =>
    (currentCategory === "all" || p.category === currentCategory) &&
    (!q || (p.title + p.summary).toLowerCase().includes(q))
  );
  $("#list").innerHTML = list.map(p => {
    const c = CATEGORIES[p.category];
    return `<button class="card" style="--c:${c.color}" data-id="${p.id}"><span class="dot"><i></i>${c.name}</span><h3>${p.title}</h3><p>${p.summary}</p><span class="meta">${p.date} · ${p.min}분</span></button>`;
  }).join("");
  $("#empty").hidden = list.length > 0;
  document.querySelectorAll(".chip").forEach(c =>
    c.setAttribute("aria-pressed", c.dataset.k === currentCategory));
}

// 칼럼 읽기 팝업
function openPost(p) {
  const c = CATEGORIES[p.category];
  openSheet(
    `<span class="dot" style="--c:${c.color}"><i></i>${c.name}</span>` +
    `<h2>${p.title}</h2>` +
    `<div class="meta" style="margin-bottom:18px">${p.date} · ${p.min}분</div>` +
    `<p><b>${p.summary}</b></p>` +
    p.body.map(t => { const h = fmt(t); return /<(table|blockquote)/.test(h) ? `<div>${h}</div>` : `<p>${h}</p>`; }).join("")
  );
}

function initColumns() {
  // 오타 등으로 존재하지 않는 카테고리를 가진 칼럼은 제외하고 경고
  for (let i = POSTS.length - 1; i >= 0; i--) {
    if (!CATEGORIES[POSTS[i].category]) {
      console.warn("알 수 없는 카테고리의 칼럼 제외:", POSTS[i]);
      POSTS.splice(i, 1);
    }
  }
  if (SITE.sortPostsByDate) POSTS.sort((a, b) => b.date.localeCompare(a.date));
  POSTS.forEach((p, i) => { p.id = i; });

  // 필터 칩: 전체 + 카테고리들
  $("#chips").innerHTML = [["all", "전체"], ...Object.entries(CATEGORIES).map(([k, v]) => [k, v.name])]
    .map(([k, n]) => `<button class="chip" data-k="${k}" aria-pressed="${k === "all"}">${n}</button>`).join("");
  $("#chips").onclick = e => {
    const b = e.target.closest(".chip");
    if (b) pickCategory(b.dataset.k);
  };

  // 카테고리 소개 박스
  $("#intro").innerHTML = Object.entries(CATEGORIES).map(([k, v]) =>
    `<button class="ic" data-k="${k}" style="background:${v.gradient};color:${v.introTextColor}"><b>${v.name}</b><span>${v.desc}</span></button>`
  ).join("");
  $("#intro").onclick = e => {
    const b = e.target.closest(".ic");
    if (b) pickCategory(b.dataset.k);
  };

  // 검색
  $("#q").oninput = renderColumns;

  // 카드 클릭 → 읽기 팝업
  $("#list").onclick = e => {
    const b = e.target.closest(".card");
    if (!b) return;
    openPost(POSTS.find(x => x.id == b.dataset.id));
  };

  renderColumns();
}
