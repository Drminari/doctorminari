/* ==========================================================
   sections/hero.js — 히어로의 앱 아이콘 타일
   카테고리(js/data/categories.js) 개수만큼 자동 생성 + 마지막에 천인샵 타일
   ========================================================== */
function initHero() {
  const categoryTiles = Object.entries(CATEGORIES).map(([k, v]) =>
    `<button class="tile" data-k="${k}" aria-label="${v.name} 칼럼 보기"><div class="ico" style="background:${v.gradient}">${ICONS[k] || v.name[0]}</div><span>${v.name}</span></button>`
  ).join("");

  const shopTile =
    `<a class="tile" href="#shop" style="text-decoration:none" aria-label="천인샵으로 이동"><div class="ico" style="background:linear-gradient(145deg,#3C74D0,#0B2A5B)">${ICONS.shop}</div><span>천인샵</span></a>`;

  $("#tiles").innerHTML = categoryTiles + shopTile;

  // 카테고리 타일을 누르면 칼럼 섹션으로 이동 + 해당 카테고리 필터
  $("#tiles").onclick = e => {
    const b = e.target.closest("button.tile");
    if (b) pickCategory(b.dataset.k);
  };
}
