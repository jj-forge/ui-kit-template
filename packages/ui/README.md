# @ui-kit/ui

이 패키지는 모노레포 내 여러 프로젝트에서 공통으로 사용하는 React 기반 공용 UI 컴포넌트 라이브러리입니다.  
일관된 디자인 시스템과 재사용 가능한 컴포넌트 제공을 목표로 하며, Vite, TailwindCSS, Storybook, TypeScript 등 최신 프론트엔드 스택을 활용합니다.

## 주요 목적

- 다양한 프로젝트에서 일관된 UI/UX 제공
- 재사용 가능한 컴포넌트 개발 및 배포
- 디자인 시스템의 효율적 관리

## 주요 기술 스택

- **React**: UI 컴포넌트 개발
- **Vite**: 번들러 및 개발 환경
- **TailwindCSS**: CSS 프레임워크
- **Storybook**: 컴포넌트 문서화 및 테스트
- **TypeScript**: 정적 타입 지원

## 주요 기능

- 공통 UI 컴포넌트 제공 및 재사용
- Storybook을 통한 컴포넌트 문서화 및 시각적 테스트
- TailwindCSS 기반의 일관된 스타일링
- TypeScript 기반의 안전한 컴포넌트 개발

## 폴더 구조

```plaintext
packages/ui
├── src           # 컴포넌트 소스 코드
├── stories       # Storybook 스토리 파일
├── dist          # 빌드 결과물
├── index.ts      # 엔트리 포인트
├── package.json  # 패키지 설정
└── ...
```

## 사용법

이 패키지는 모노레포 내 다른 앱(예: web, docs)에서 다음과 같이 import하여 사용할 수 있습니다.

```tsx
import { Button } from '@ui-kit/ui';

function App() {
  return <Button>버튼</Button>;
}
```

## 개발 및 빌드

### 1. 빌드

```sh
pnpm build
```

## 참고 자료

- [React 공식 문서](https://react.dev/)
- [Vite 공식 문서](https://vitejs.dev/)
- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [Storybook 공식 문서](https://storybook.js.org/docs/react/get-started/introduction)
- [TypeScript 공식 문서](https://www.typescriptlang.org/) 