/* utils.js — 공통 도우미 (수정할 일 거의 없음) */
const $ = s => document.querySelector(s);

// 칼럼 본문 서식: **굵게** → <b>, 줄 맨 앞 "> 인용" → <blockquote>
const fmt = t => t
  .replace(/^> (.*?)(?:<br>\s*)*$/gm, "<blockquote>$1</blockquote>")
  .replace(/\*\*([^*]+?)\*\*/g, "<b>$1</b>");
