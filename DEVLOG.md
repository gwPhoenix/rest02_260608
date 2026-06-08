# 개발일지 (Development Log)

## 프로젝트 정보
- **프로젝트명**: GW Phoenix 회사 웹사이트
- **저장소**: https://github.com/gwPhoenix/rest02_260608
- **기술 스택**: React + Vite
- **배포**: GitHub Pages

---

## 2026-06-08 — v0.1.0 초기 개발

### 작업 내용

#### 환경 설정
- GitHub 저장소 클론 (`rest02_260608`)
- Vite + React 프로젝트 초기화 (`npm create vite@latest`)
- 의존성 설치 (`npm install`)
- GitHub Pages 배포 설정 (`gh-pages` 패키지)

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

### 회사 정보
- **상호**: GW Phoenix
- **창립**: 2003년 9월 23일
- **업종**: 컴퓨터 판매, 소프트웨어 개발, 웹 개발

---

## 예정 작업
- [ ] 포트폴리오 페이지
- [ ] 서비스 상세 페이지
- [ ] 연락처 폼 (이메일 발송)
- [ ] 애니메이션 (스크롤 인터랙션)
- [ ] SEO 메타태그 설정
