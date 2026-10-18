# DR. MINARI (닥터미나리) 웹사이트

원본 단일 HTML 파일을 **섹션별 · 칼럼별**로 나눈 버전입니다.
화면과 기능은 원본과 동일합니다.

## 폴더 구조

```
dr-minari/
├─ index.html                 ← 완성 페이지 (자동 생성, 직접 수정 금지)
├─ index.template.html        ← 페이지 뼈대 (섹션 순서 · CSS/JS 연결)
├─ build.py                   ← 조립 스크립트
├─ dist/dr-minari-single.html ← 모든 것을 한 파일에 담은 버전 (자동 생성)
│
├─ sections/                  ← 섹션별 HTML (문구·구성 수정)
│   ├─ header-nav.html   상단 메뉴 + D-DAY
│   ├─ hero.html         메인 이미지 · 타이틀 · 앱 아이콘 타일
│   ├─ columns.html      칼럼 섹션 틀
│   ├─ shop.html         천인샵
│   ├─ about.html        소개
│   ├─ brand-banner.html 브랜드 배너 이미지
│   ├─ contact.html      문의·구독 폼
│   ├─ footer.html       푸터
│   └─ modal.html        팝업 틀
│
├─ css/                       ← 섹션별 스타일 (섹션 HTML과 이름이 대응)
│   base · nav · hero · columns · shop · about · contact · footer · modal
│
├─ js/
│   ├─ config.js              ★ 이메일, D-DAY 기준일 등 사이트 설정
│   ├─ data/
│   │   ├─ categories.js      ★ 칼럼 카테고리(목록) 정의
│   │   ├─ posts-minari.js    ★ [닥터미나리] 칼럼들
│   │   ├─ posts-play.js      ★ [생각장난] 칼럼들
│   │   ├─ posts-book.js      ★ [망한김에 닥치고 책읽기] 칼럼들
│   │   └─ privacy.js         ★ 개인정보처리방침 문구
│   ├─ icons.js               앱 아이콘 SVG
│   ├─ sections/              섹션별 동작 (nav · hero · columns · shop · contact · footer)
│   ├─ modal.js · utils.js · main.js
│
└─ assets/images/             ← 이미지 파일 (교체하려면 같은 이름으로 덮어쓰기)
    logo · hero-main · character · store-logo · about-bottle · brand-banner
```

## 자주 하는 수정

| 하고 싶은 일 | 수정할 파일 |
|---|---|
| **새 칼럼 추가** | `js/data/posts-○○.js` 의 목록에 `{ ... }` 블록 복사·붙여넣기 |
| 칼럼 내용 수정 · 편집포인트 채우기 | 해당 `js/data/posts-○○.js` |
| 칼럼 목록(카테고리) 이름·설명·색상 | `js/data/categories.js` |
| **새 칼럼 목록(카테고리) 만들기** | `categories.js`에 블록 추가 → `js/data/posts-새키.js` 생성 → `index.template.html`에 `<script>` 한 줄 추가 |
| 이메일 주소 변경 | `js/config.js` (한 곳만 바꾸면 전체 반영) |
| D-DAY 기준일 / 시작 숫자 | `js/config.js` |
| 칼럼을 날짜순으로 자동 정렬 | `js/config.js` 의 `sortPostsByDate: true` |
| 천인샵 / 소개 / 문의 / 푸터 문구 | `sections/해당파일.html` |
| 상단 메뉴 추가·삭제 | `sections/header-nav.html` |
| 개인정보처리방침 문구 | `js/data/privacy.js` |
| 색상·폰트 전체 | `css/base.css` 맨 위 `:root` |
| 섹션 순서 변경 / 새 섹션 추가 | `index.template.html` 의 `@include` 줄 |
| 이미지 교체 | `assets/images/` 안의 같은 이름 파일 덮어쓰기 |

### 새 칼럼 추가 예시 (`js/data/posts-minari.js`)

```js
  {
    title: "새 칼럼 제목",
    date: "2026-10-15",
    min: 5,
    summary: "카드에 보일 요약 한두 문장",
    body: [
      "첫 번째 문단",
      "두 번째 문단",
      ed("나중에 채울 부분 메모")     // ← 편집포인트 표시 (필요 없으면 삭제)
    ]
  },
```
앞 블록 뒤에 쉼표(,)를 잊지 마세요.

## 수정한 뒤 반영하기

1. 위 파일들을 수정·저장합니다.
2. 터미널에서 `python build.py` 실행 (Python 3만 있으면 됨, 추가 설치 없음)
3. `index.html` 을 열어 확인합니다.

> 배포할 때는 `index.html` + `css/` + `js/` + `assets/` 폴더를 함께 올리거나,
> 파일 하나만 올릴 수 있는 곳이면 `dist/dr-minari-single.html` 을 사용하세요.

## 원본 대비 정리한 점
- 6개의 base64 이미지를 `assets/images/` 파일로 분리 (용량 590KB → HTML 8KB)
- 칼럼 데이터를 카테고리별 파일로 분리하고, 필드명을 읽기 쉽게 변경 (`t→title`, `d→date` 등), 번호(id)는 자동 부여
- 이메일 주소를 `config.js` 한 곳으로 통일 (기존에는 4곳에 중복)
- 인라인 스타일 일부를 CSS로 이동, 쓰이지 않던 스타일(`.ring`, `.steps`, `.cmt`)과 필드(`l`) 삭제
