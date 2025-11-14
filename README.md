## 1. 로컬에 프로젝트 받기 & 개발 서버 실행하기

### Git 설치 확인

- Mac은 기본 제공. Windows는 Git 공식 사이트에서 설치 후 git --version으로 확인하기

### 저장소 내려받기

- GitHub의 저장소를 원하는 폴더로 내려받는다.

  ```bash
  git clone https://github.com/IBAS-DEV-PROJECT/ibas-dev-tech-blog.git
  cd ibas-dev-tech-blog
  ```

### Node.js / npm 준비

- Node 18 이상 권장. 설치 후 `node -v`, `npm -v`로 버전 확인하기

### 프로젝트 의존성 설치

```bash
npm install
```

- 처음 한 번만 실행. `node_modules` 폴더가 생기면 성공

### 개발 서버 실행

```bash
npm run dev
```

- 브라우저에서 <http://localhost:4321> 접속 → 페이지가 보이면 완료
- 수정 후 저장하면 브라우저가 자동으로 새로고침된다.

## 2. 블로그 글 작성 방법

### 2-1. 파일 위치

- 모든 글은 `src/content/blog/` 안에 Markdown(.md)이나 MDX(.mdx) 파일로 작성한다.
- 새 글을 만들려면, 해당 폴더에서 새로운 파일을 생성한다. (kebab-case 권장)

### 2-2. Frontmatter 템플릿

- 파일 최상단에는 반드시 아래 형식(Frontmatter)을 넣는다.
- `tags` 는 선택값이지만, 되도록 프로젝트 기준 태그 ID 중 하나 이상을 고른다.

  - 사용 가능한 ID: `ibas`, `incherin`, `spoti-test`, `joalarm`, `misc` (정의: `src/data/projectTags.ts`)

  ```md
  ---
  title: '글 제목'
  description: '요약 문장 (리스트/목적)'
  pubDate: 'Jun 19 2024' # 월 이름 3글자 + 일 + 연도 (영문)
  updatedDate: 'Jun 25 2024' # 선택, 없으면 지워도 됨
  heroImage: '../../assets/blog-placeholder-1.jpg' # 이미지가 있으면 경로 기입
  tags:
    - ibas # src/data/projectTags.ts에 정의된 id 중 선택
    - joalarm
  ---

  본문 시작!
  ```

- Frontmatter 아래에는 일반 Markdown 문법으로 자유롭게 작성하면 된다.
- 이미지 추가 시 src/assets/에 파일을 넣고 상대 경로(예: '../../assets/my-image.jpg')로 지정한다.

### 2-3. 미리보기

- npm run dev로 개발 서버 실행 상태에서 파일 저장 → 브라우저 새로고침 없이 바로 확인 가능함
- 레이아웃은 src/layouts/BlogPost.astro가 담당한다.

## 3. 브랜치 전략 & 최신 main 반영하기

1. **작업 브랜치 따기**
   ```bash
   git checkout -b feature/이름
   # 예: git checkout -b feature/haewon
   ```
2. **작업 후 커밋하기**
   ```bash
   git add src/content/blog/내-새-글.md
   git commit -m "[haewon] 새 글 제목"
   ```
3. **최신 main 반영하기 (항상 merge 사용)**

   ```bash
   git checkout main
   git pull origin main       # main 최신 상태로 업데이트

   git checkout feature/이름
   git merge main             # main을 현재 브랜치에 병합
   ```

   - 충돌(conflict)이 발생하면 표시된 구간을 수정하고 저장 → `git add` 로 해결된 파일을 표시한 뒤 `git merge --continue`.

4. **원격 저장소에 내 브랜치 푸시**
   ```bash
   git push origin feature/이름
   ```
5. **Pull Request 생성 & 병합**
   - GitHub에서 내 브랜치를 선택 → “New Pull Request” 클릭
   - CI 오류가 없고 main과 충돌이 없으면 바로 merge해도 됨 (리뷰 없이 병합).

---

> ⚠️ `main`에서 직접 작업하지 말고, 브랜치 따서 작업하기  
> 새 작업을 시작하기 전, `git pull origin main`으로 최신 코드를 받은 뒤 브랜치를 만드는 습관을 들이면 충돌을 크게 줄일 수 있습니다.
