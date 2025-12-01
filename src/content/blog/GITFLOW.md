---
title: 'ESLint&Prettier와 Git 협업 규칙'
description: '프로젝트 초기에 반드시 설정해야 할 ESLint&Prettier와 Git 협업 전략을 정리한 가이드입니다.'
pubDate: 'Nov 22 2025'
heroImage: '../../assets/gitflow.png'
author:
  name: 'seohyeon'
tags:
  - ibas
---


## 프로젝트 초기 세팅

### 왜 초기 세팅이 중요한가

프론트엔드 프로젝트는 시간이 지나면 코드가 급격히 늘어나고,  
각자 스타일대로 작성된 코드가 쌓이기 시작하면 유지보수가 어려워지기 마련입니다.

- 같은 기능이라도 사람마다 들여쓰기, 따옴표, 세미콜론이 다름
- 동작은 하지만 잠재적 버그를 가진 코드가 PR을 통해 스며듬
- 팀 규칙이 모호해지면서 코드 품질이 떨어짐

그래서 **ESLint + Prettier** 같은 기본 도구를 프로젝트 초반에 반드시 설정해두어야  
협업 비용을 최소화하고, 코드 품질을 일관되게 유지할 수 있습니다.

---

## ESLint

문법 오류나 잠재적 버그를 잡아주는 **JavaScript/TypeScript 코드 분석 도구**입니다.  
(코드 "내용"을 검사하는 역할)

### 특징

- 문법 에러, 사용되지 않는 변수, 위험한 패턴 등을 탐지
- 코드가 돌아가긴 하지만, **나중에 문제를 일으킬 가능성**이 있는 부분도 경고
- 팀이 정한 규칙을 코드 레벨에서 강제할 수 있음

### 왜 필요할까?

- 최소한의 코드 품질을 보장
- PR 리뷰 시 스타일 관련 피드백을 줄여 리뷰 효율 증가
- 잠재적인 에러를 미리 예방할 수 있음

### CLI

```bash
pnpm lint         # 전체 검사
pnpm lint -- --fix  # 자동 수정
### 예시

```ts
heroImage: '../../assets/gitflow.png'
const b = 2;

if (a == b) {
    console.log("같다");
```

`==`는 타입 비교가 느슨해 위험하므로 ESLint는 경고를 띄워줍니다.

## Prettier

코드 스타일을 자동으로 통일해주는 포맷터 (형식/모양 담당)

### 특징

- 들여쓰기, 따옴표, 세미콜론 등 스타일 통일
- 코드의 "내용"은 건드리지 않음
- 저장 시 자동 포맷팅 적용 가능

### 왜 필요할까?

- 개발자마다 스타일이 달라 발생하는 혼란 제거
- 커밋 전 자동 정리 → 깔끔한 코드 유지

### CLI

```bash
pnpm prettier src --write
```

### 예시

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

### Before / After
```ts
// before
const sum=(a:number,b:number)=>{return a+b}

// after
const sum = (a: number, b: number) => {
  return a + b;
};
```

---
## GitHub 협업 규칙
협업 프로젝트에서는
"누가 어떤 브랜치에서 무엇을 작업하는지"가 명확해야 충돌을 줄일 수 있습니다.
여기서는 **Git Flow vs GitHub Flow**를 비교하고 정리합니다.

### 깃 플로우란?
여러 개발자가 동시에 작업할 때 
**브랜치 구조와 작업 흐름을 명확히 정의하는 방법론**

대표 방식:
- Git Flow
- GitHub Flow

---
## Git Flow

`main + develop + feature + release + hotfix`  
브랜치가 세분화된 클래식한 전략

### 브랜치 구성

- **main**  
  실제 배포된 버전이 존재하는 브랜치  
  안정적이며, 배포된 코드만 존재해야 함.

- **develop**  
  다음 버전 출시를 위해 모든 기능을 통합하는 브랜치  
  서로 다른 feature 브랜치가 모여 테스트·통합되는 공간.

- **feature/**  
  새로운 기능 개발용 브랜치  
  예: `feature/login`, `feature/dashboard-ui`  
  develop에서 분기 → 개발 → 다시 develop에 병합.

- **release/**  
  배포 전 QA 및 안정화 단계  
  develop에서 기능 개발을 모두 끝낸 후 release로 분기해 최종 점검.

- **hotfix/**  
  운영 중 발생한 긴급 버그 수정용  
  main에서 직접 분기 → 수정 후 develop과 main 양쪽에 병합.

### 장점

- 버전 관리가 명확하고 체계적  
- 개발 규모가 큰 프로젝트에서도 관리가 용이  
- 기능 개발 / QA / 배포가 분리됨 → 안정적인 릴리스 가능

### 단점

- 브랜치가 많고 프로세스가 복잡  
- 작은 팀/MVP 개발에서는 필요 이상으로 무거움  
- 브랜치 이동과 머지 작업에 드는 비용 증가

---

## GitHub Flow

`main + feature/*`  
GitHub 기반 협업(특히 PR 중심)에 최적화된 단순하고 현대적인 전략

### 브랜치 구성

- **main**  
  항상 “바로 배포 가능한 상태”여야 하는 브랜치  
  불안정한 코드가 들어오면 안 됨.

- **feature/**  
  기능 개발용 브랜치  
  예: `feature/login-page`, `feature/fetch-user`  
  main에서 분기 → 작업 → Pull Request → main으로 병합하는 구조.

### 규칙

- main은 항상 안정적이고 배포 가능한 상태 유지  
- 기능 개발 시 feature 브랜치 생성 후 작업  
- 작업이 끝나면 PR(Pull Request) 생성해 코드 리뷰 진행  
- 승인되면 main에 병합하고 필요하면 즉시 배포  
- 모든 변경은 반드시 PR을 통해 이뤄지는 것이 원칙

### 장점

- 구조가 단순해 이해하고 사용하기 쉬움  
- 빠르게 기능을 추가·수정해야 하는 소규모 팀에 매우 적합  
- PR 기반 협업으로 코드 품질 관리 가능  
- 배포 사이클이 빠른 서비스 운영에 유리

### 단점

- Git Flow처럼 정교한 버전 관리 체계는 없음  
- QA 단계가 Git Flow만큼 분리되어 있지 않아, 팀 내부 규칙이 필요  
- 큰 조직/프로젝트에서는 배포 관리에 추가 도구가 필요할 수 있음


---
### 출처
https://medium.com/addweb-engineering/workflows-comparison-github-flow-vs-git-flow-3cd811f3d0ae