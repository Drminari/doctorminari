/* ==========================================================
   data/categories.js — 칼럼 카테고리(목록) 정의
   새 카테고리를 만들려면 아래에 한 블록을 추가하고,
   js/data/posts-{키}.js 파일을 만든 뒤 index.template.html 에 <script> 한 줄을 추가하세요.
   (js/icons.js 에 같은 키의 아이콘이 없으면 이름 첫 글자가 아이콘으로 표시됩니다.)
   ========================================================== */
const CATEGORIES = {
  play: {
    name: "생각장난",
    desc: "생각이 선을 넘는 장난 아닌 장난",
    color: "#E7B416",                                        // 카드 점 색상
    gradient: "linear-gradient(145deg,#FFE27A,#E0A200)",      // 아이콘·소개박스 배경
    introTextColor: "#2B2200"                                // 소개박스 글자색
  },
  book: {
    name: "망한김에 닥치고 책읽기",
    desc: "진짜 망한김에 미친듯이 닥치는대로 읽기",
    color: "#2B2B2B",
    gradient: "linear-gradient(145deg,#5A5A5A,#111)",
    introTextColor: "#fff"
  },
  minari: {
    name: "닥터미나리",
    desc: "입으로 먹고, 피부에 바르고, 몸에 쓰는 것의 원리",
    color: "#3A8A3F",
    gradient: "linear-gradient(145deg,#7BD17F,#2A7330)",
    introTextColor: "#fff"
  }
};
