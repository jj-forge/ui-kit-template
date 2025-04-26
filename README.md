# UI Kit Template 모노레포

이 프로젝트는 Turborepo, pnpm, TailwindCSS, Vite, React, Next.js, Storybook을 활용한 모노레포 템플릿입니다.  
프론트엔드 팀 개발, 디자인 시스템 구축, 컴포넌트 재사용에 최적화되어 있습니다.

## 주요 기술 스택

- **Turborepo**: 모노레포 관리 및 빌드 최적화
- **pnpm**: 패키지 매니저
- **React**: UI 컴포넌트 개발
- **Next.js**: Docs(웹 문서) 프로젝트 개발을 위해 사용
- **Vite**: 번들러
- **TailwindCSS**: CSS 프레임워크
- **Storybook**: UI 컴포넌트 개발 및 문서화 도구
- **TypeScript**: 정적 타입 지원

## 폴더 구조

```plaintext
.
├── apps
│   ├── docs        # Next.js 기반 문서 사이트
│   └── storybook   # Storybook 
├── packages
│   ├── ui                # 공통 React UI 컴포넌트 라이브러리
│   ├── eslint-config     # 공통 ESLint 설정
│   └── typescript-config # 공통 TypeScript 설정
├── turbo.json            # Turborepo 설정
└── ...
```

## 설치 및 실행 방법

### 1. 의존성 설치

```sh
pnpm install
```

### 2. 개발 서버 실행

```sh
pnpm dev
```

### 3. 전체 빌드

```sh
pnpm build
```

### 4. Storybook 실행

```sh
pnpm storybook
```

## 주요 기능

- **모노레포 구조**: 여러 앱과 패키지를 하나의 저장소에서 효율적으로 관리
- **공통 UI 컴포넌트**: `@ui-kit/ui` 패키지에서 개발, `web` 및 `docs` 앱에서 재사용
- **Storybook**: UI 컴포넌트 문서화 및 테스트 환경 제공
- **TailwindCSS**: 빠른 스타일링 및 일관된 디자인 시스템 구축
- **ESLint/Prettier**: 코드 품질 및 스타일 일관성 유지
- **Remote Caching**: Vercel 연동 시 빌드 캐시 공유 가능

## 참고 자료

- [Turborepo 공식 문서](https://turborepo.com/docs)
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Vite 공식 문서](https://vitejs.dev/)
- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [Storybook 공식 문서](https://storybook.js.org/docs/react/get-started/introduction)
- [pnpm 공식 문서](https://pnpm.io/ko/)
- [TypeScript 공식 문서](https://www.typescriptlang.org/)
