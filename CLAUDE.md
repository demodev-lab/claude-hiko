# 하이코(Hiko) 프로젝트 - Claude 작업 내역

## 프로젝트 개요
한국에 거주하는 외국인들을 위한 통합 생활 플랫폼 앱 구축

## 완료된 작업 내역

### 1. 프로젝트 초기 설정
- Vite + React + TypeScript 프로젝트 기반
- 필요한 디렉토리 구조 생성:
  - `src/pages/` - 페이지 컴포넌트
  - `src/components/` - 재사용 가능한 컴포넌트
  - `src/layouts/` - 레이아웃 컴포넌트

### 2. 종속성 설치
```bash
# 설치된 패키지들
- react-router-dom (v7.6.2) - 라우팅
- lucide-react (v0.517.0) - 아이콘
- tailwindcss (v3.4.17) - 스타일링
- postcss (v8.5.6) - CSS 처리
- autoprefixer (v10.4.21) - CSS 벤더 프리픽스
```

### 3. Tailwind CSS 설정
- Tailwind CSS v3 설치 (v4에서 다운그레이드)
- `tailwind.config.js` 파일 생성
- `postcss.config.js` 파일 생성
- `src/index.css`에 Tailwind 지시문 추가

### 4. 컴포넌트 파일 구성
code-dir 폴더의 파일들을 적절한 위치로 이동:
- `회원가입.tsx` → `src/pages/Signup.tsx`
- `통합앱-홈-중고거래.tsx` → `src/pages/Home.tsx`
- `통합앱-커뮤니티.tsx` → `src/pages/Community.tsx`
- `통합앱-채팅탭.tsx` → `src/pages/Chat.tsx`

### 5. 라우팅 구조
```
/ → /signup (기본 리다이렉트)
/signup - 회원가입 페이지
/home - 홈/중고거래 통합 페이지
/community - 커뮤니티 페이지
/chat - 채팅 페이지
```

### 6. 통합 네비게이션 구현
- `src/components/MainLayout.tsx` 생성
- 하단 네비게이션 바로 모든 페이지 연결
- 탭 전환 시 라우트 변경 구현

### 7. 앱 구조
- **회원가입**: 단계별 온보딩 프로세스
- **홈**: 핫딜 정보 + 중고거래 통합
- **커뮤니티**: 마이타운/글로벌/정보게시판 3단계 구조
- **채팅**: 다양한 채팅 타입 (긴급통역, 중고거래, 언어교환 등)

## 주요 기능
1. **다국어 지원**: 실시간 번역 기능
2. **긴급통역**: 24시간 통역 서비스
3. **지역 기반 서비스**: 한국 전 지역 세분화
4. **외국인 친화적 UI**: 국가별 커뮤니티 분리

## 실행 방법
```bash
pnpm run dev
```

## 접속 URL
- 개발 서버: http://localhost:5173/
- 시작 페이지: http://localhost:5173/signup

## 다음 단계 추천
1. 백엔드 API 연동
2. 상태 관리 (Redux/Zustand) 도입
3. 인증 시스템 구현
4. 실시간 채팅 기능 구현
5. 번역 API 연동

## 주의사항
- **모바일 뷰 전용**: 이 프로젝트는 모바일 화면(max-width: 428px)에 최적화되어 있음
- **패키지 매니저**: pnpm만 사용 (npm, yarn 사용 금지)
- Tailwind CSS v4는 PostCSS 플러그인 구조가 변경되어 v3를 사용 중
- 모든 컴포넌트는 TypeScript로 작성됨
- 모바일 전용 디자인으로 구현됨

## 개발 환경 설정
```bash
# pnpm 설치 (없는 경우)
npm install -g pnpm

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```