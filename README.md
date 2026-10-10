# 자극과 반응 — 중3 과학 학습 웹앱

## 구조
- `index.html` + `css/` `js/` `img/` — 개발 소스 (JSX, 브라우저에서 Babel 변환)
- `index.prod.html` + `vendor/` — 프로덕션 소스 (JSX 사전 컴파일, Babel 없음)
- `dist/index.html` — **배포용 단일 파일** (React·폰트·이미지 전부 내장, 외부 의존 0)

## 배포 (Cloudflare Pages)
`dist/index.html` 하나만 Direct Upload 하면 됩니다.
Git 연동 시: Build command 없음, Build output directory = `dist`

## 링크
- 단원 선택 버튼 → https://labbitory.com/grade3
