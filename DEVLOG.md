# 개발일지 (Development Log)

## 프로젝트 정보
- **프로젝트명**: GW Phoenix 회사 웹사이트
- **저장소**: https://github.com/gwPhoenix/rest02_260608
- **기술 스택**: React + Vite
- **배포**: GitHub Pages (https://gwPhoenix.github.io/rest02_260608)

---

## 2026-06-08 — v0.1.0 초기 개발

### 작업 내용

#### 환경 설정
- GitHub 저장소 클론 (`rest02_260608`)
- Vite + React 프로젝트 초기화 (`npm create vite@latest`)
- 의존성 설치 (`npm install`)
- GitHub Pages 배포 설정 (`gh-pages` 패키지, `vite.config.js` base 설정)

#### 컬러 시스템 설계
- 메인 컬러: 다크블루(`#0d1b2a`), 로열블루(`#2a52be` / `#4169e1`)
- 포인트 컬러: 다크그린(`#2d6a42`), 다크레드(`#a82424`)
- CSS 변수(`:root`) 기반 토큰 시스템 구축 (`src/styles/variables.css`)

#### 컴포넌트 개발
| 컴포넌트 | 파일 | 설명 |
|---|---|---|
| Header | `src/components/Header.jsx` | 고정 네비게이션, 스크롤 효과, 모바일 햄버거 메뉴 |
| Footer | `src/components/Footer.jsx` | 4단 그리드 푸터, 링크, 연락처 |
| Home | `src/pages/Home.jsx` | 메인 페이지 (Hero, Stats, Services, About, CTA) |

#### 페이지 구성
- **Hero 섹션**: 풀스크린, 그라디언트 배경, 닷 패턴, 스크롤 인디케이터
- **Stats 섹션**: 20년 업력, 500+ 납품 고객사, 300+ 프로젝트, 99% 만족도
- **Services 섹션**: 컴퓨터 판매 / 소프트웨어 개발 / 웹 개발 카드
- **About 섹션**: 창립 2003년 소개, 연도 카드 비주얼
- **CTA 섹션**: 무료 상담 신청

#### 반응형 대응
- 브레이크포인트: 900px (태블릿), 480px (모바일)
- 모바일 햄버거 네비게이션 적용

---

## 2026-06-08 — v0.2.0 다크/라이트 모드 + 5종 컬러 팔레트

### 작업 내용

#### 테마 시스템 구축
- `src/context/ThemeContext.jsx` 생성 — React Context로 테마·팔레트 전역 관리
- `data-theme` 속성(`dark` / `light`)으로 CSS 변수 일괄 전환
- `data-palette` 속성(5종)으로 accent 색상 일괄 전환
- 선택값 `localStorage` 저장 → 새로고침 후에도 유지

#### 5종 컬러 팔레트
| 팔레트 | 메인 색상 | 보조 색상 |
|---|---|---|
| 블루 (기본) | `#2a52be` / `#4169e1` | 그린 + 레드 |
| 그린 | `#059669` / `#10b981` | 블루 + 레드 |
| 퍼플 | `#7c3aed` / `#a78bfa` | 그린 + 오렌지 |
| 오렌지 | `#b45309` / `#f59e0b` | 블루 + 레드 |
| 틸 | `#0e7490` / `#22d3ee` | 퍼플 + 오렌지 |

#### 헤더 UI 개선
- `[문의하기]` 버튼 바로 뒤에 테마 토글·팔레트 선택 버튼 인접 배치
- nav + controls를 `header-right`로 묶어 간격 최소화
- 팔레트 드롭다운: 스와치 원형 + 이름 + 현재 선택 체크 표시
- 팔레트 버튼 색상이 현재 선택된 palette swatch로 실시간 반영

#### CSS 변수 리팩토링
- 하드코딩 색상 전면 제거, 모든 accent → `--palette-*` 변수 참조
- 다크/라이트 모드 각각 bg·text·shadow 변수 분리
- 팔레트 전환 시 그림자·그라디언트·테두리까지 함께 변경

### 수정된 파일
- `src/context/ThemeContext.jsx` (신규)
- `src/styles/variables.css` (전면 재구성)
- `src/components/Header.jsx` / `Header.css`
- `src/pages/Home.css`
- `src/index.css`

---

## 2026-06-08 — v0.3.0 아이콘 시스템 전환 (이모지 → Material Symbols)

### 작업 내용

#### 아이콘 시스템 도입
- Google Fonts **Material Symbols Rounded** 적용 (weight 300, filled 0)
- Rounded 변형 선택 이유: 직선 대비 곡선 형태가 더 감성적·부드러운 인상 전달
- `src/components/Icon.jsx` 공통 컴포넌트 생성
  - `name` (아이콘명), `size` (폰트 크기), `className`, `style` props 지원

#### 전체 이모지 제거 및 아이콘 교체
| 위치 | 변경 전 | 변경 후 |
|---|---|---|
| 헤더 테마 토글 | ☀️ / 🌙 | `light_mode` / `dark_mode` |
| 헤더 팔레트 버튼 | 원형 스와치만 | `palette` 아이콘 |
| 헤더 팔레트 체크 | ✓ 텍스트 | `check` 아이콘 |
| 서비스 카드 | 🖥️ ⚙️ 🌐 | `computer` / `code_blocks` / `language` |
| Stats 항목 | 없음 | `history` / `groups` / `rocket_launch` / `verified` |
| Hero 뱃지 | 없음 | `calendar_today` |
| Hero 버튼 | 없음 | `grid_view` / `mail_outline` |
| About 카드 | 없음 | `apartment` / `workspace_premium` |
| CTA 섹션 | 없음 | `handshake` / `send` |
| Footer 연락처 | 📧 📞 📍 | `mail_outline` / `phone` / `location_on` |
| Footer Since | 없음 | `history` |

#### UI 디테일 개선
- 서비스 카드 아이콘을 56px 박스(subtle bg)로 감싸 카드 레이아웃 강화
- 호버 시 아이콘 박스 배경색 전환 효과 추가
- `자세히 보기 →` 화살표 → `arrow_forward` 아이콘으로 교체, 호버 시 gap 확장
- 버튼(`btn-primary`, `btn-outline`) inline-flex + gap으로 아이콘 정렬 통일

### 수정된 파일
- `index.html` (Material Symbols 폰트 링크 추가, 페이지 title 수정)
- `src/components/Icon.jsx` (신규)
- `src/components/Header.jsx` / `Header.css`
- `src/components/Footer.jsx` / `Footer.css`
- `src/pages/Home.jsx` / `Home.css`
- `src/index.css` (Material Symbols 기본 스타일, 버튼 flex 정렬)

---

## 예정 작업
- [ ] 포트폴리오 페이지
- [ ] 서비스 상세 페이지
- [ ] 연락처 폼 (이메일 발송)
- [ ] 스크롤 인터랙션 애니메이션
- [ ] SEO 메타태그 설정
