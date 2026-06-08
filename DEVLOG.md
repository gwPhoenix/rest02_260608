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
- `[문의하기]` 버튼 바로 뒤에 `[☀️/🌙 토글]` `[● 팔레트 선택]` 배치
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
- `src/components/Header.jsx` (토글·팔레트 UI 추가)
- `src/components/Header.css` (header-right 레이아웃)
- `src/pages/Home.css` (하드코딩 색상 → 변수 교체)
- `src/index.css` (body transition 추가)

---

## 예정 작업
- [ ] 포트폴리오 페이지
- [ ] 서비스 상세 페이지
- [ ] 연락처 폼 (이메일 발송)
- [ ] 스크롤 인터랙션 애니메이션
- [ ] SEO 메타태그 설정
