# neisii.github.io

neisii(백가희)의 글과 작업 기록을 모아 둔 개인 사이트입니다.
주소: https://neisii.github.io/

## 구성

- 글: `src/content/posts/*.mdx`. 머리말의 `kind`가 `article`이면 글 목록에, `project`면 프로젝트 기록으로 보입니다.
- 프로젝트 카드: `src/data/projects.ts`. 프로젝트 하나는 카드, `kind: project` 글, 상세 페이지의 글 링크(`src/pages/projects/[slug].astro`) 셋이 짝입니다.
- 이미지: `public/images/`

## 로컬에서 보기

```sh
pnpm install
pnpm dev      # http://localhost:4321/
pnpm build    # dist/ 에 정적 파일
```

## 배포

`main`에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 GitHub Pages로 배포합니다.

- 저장소 Settings → Pages의 Source는 GitHub Actions입니다.
- 사이트 주소 기준은 저장소 이름에서 계산합니다(`astro.config.mjs`).
- pnpm 버전은 `package.json`의 `packageManager` 한 곳에서만 정합니다. 워크플로에 다시 적으면 배포가 실패합니다.

## 글과 소재

글과 프로젝트 소개의 소재는 제가 제공한 출처(저장소, 문서, 화면)에서 옮겨 싣고, 글마다 출처를 남깁니다.

## 라이선스

- 글·프로젝트 소개·이미지(`src/content/`, `public/images/`, `src/data/projects.ts`의 소개 글): [CC BY-NC-ND 4.0](./LICENSE-CONTENT.md). 출처(백가희, neisii)와 원문 링크를 밝히고, 비영리로, 고치지 않은 원문 그대로만 공유할 수 있습니다.
- 사이트 코드: [Apache License 2.0](./LICENSE). 저작자 표시는 [`NOTICE`](./NOTICE)에 있습니다.
