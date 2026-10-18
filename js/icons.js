/* ==========================================================
   icons.js — 앱 아이콘 타일에 쓰이는 SVG 그림
   키 이름은 js/data/categories.js 의 카테고리 키와 같아야 합니다.
   (shop 은 천인샵 타일용)
   ========================================================== */
const SVG_OPEN='<svg viewBox="0 0 100 100" aria-hidden="true">';
const ICONS={
play:SVG_OPEN+'<path d="M50 18c-13 0-22 9-22 21 0 8 4 13 9 18 3 3 4 6 4 9h18c0-3 1-6 4-9 5-5 9-10 9-18 0-12-9-21-22-21z" fill="#FFF6C9"/><rect x="41" y="70" width="18" height="6" rx="3" fill="#fff"/><rect x="44" y="79" width="12" height="5" rx="2.5" fill="#fff"/><path d="M12 30l8 4M88 30l-8 4M50 6v7M14 64q6-8 12 0t12 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M44 36q6-6 12 0t-6 12" stroke="#E0A200" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',
book:SVG_OPEN+'<polyline points="12,16 28,26 40,18 60,34" stroke="#FF6B5E" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M50 42C40 36 28 36 14 40v42c14-4 26-4 36 2 10-6 22-6 36-2V40C72 36 60 36 50 42z" fill="#F4F4F0"/><path d="M50 42v42" stroke="#999" stroke-width="2"/><path d="M22 52q12-3 22 2M22 64q12-3 22 2M56 54q10-5 22-2M56 66q10-5 22-2" stroke="#8a8a85" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',
shop:SVG_OPEN+'<path d="M10 26h12l7 36h44l6-28H26" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="36" cy="44" r="9" fill="#5AA2FF"/><circle cx="52" cy="44" r="9" fill="#2FD17F"/><circle cx="68" cy="44" r="9" fill="#FFB21A"/><circle cx="38" cy="78" r="5" fill="#fff"/><circle cx="68" cy="78" r="5" fill="#fff"/></svg>',
minari:SVG_OPEN+'<path d="M50 92V48" stroke="#fff" stroke-width="5" stroke-linecap="round"/><path d="M50 52C34 52 22 42 20 26c16 0 28 8 30 26z" fill="#fff"/><path d="M50 52c16 0 28-10 30-26-16 0-28 8-30 26z" fill="#fff"/><path d="M50 36c-9-4-12-14-10-24 10 2 16 12 10 24z" fill="#DFF5E0"/><path d="M50 36c9-4 12-14 10-24-10 2-16 12-10 24z" fill="#fff"/></svg>'};
