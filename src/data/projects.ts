export type Project = {
  slug: string;
  name: string;
  title: string;
  period: string;
  date: string;
  type: string;
  summary: string;
  description: string;
  color: string;
  mark: string;
  role: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  imageMode?: 'portrait' | 'wide';
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'harness-naroo', name: 'HARNESS NAROO', date: '2026-11-22',
    title: 'AI 에이전트의 결과가 전체와 맞물리는지 확인하기', period: '2026 — 진행 중', type: '개발 도구 · Claude Code 플러그인',
    summary: 'AI 에이전트가 "완료"라고 한 결과가 시스템 전체의 정합성을 깨지 않는지 확인하는 Claude Code 하네스.',
    description: 'SI 사업에서 AI 세션 여러 개로 화면을 개발하며 쌓은 규칙을 Claude Code 플러그인으로 정리해 공개했다. 청사진을 사람이 승인하기 전에는 구현하지 않고, 확인한 것만 확인했다고 쓰며, 커밋 전에 작업 대화를 물려받지 않은 AI가 다시 검증한다. 되돌릴 수 없는 일, 모호한 요구, 사람이 정할 업무 결정 앞에서는 멈추고 묻는다. 0.2.0부터 여러 세션을 사람의 결정 아래 나눠 쓰는 구성과 초심자 안내서를 넣었고, 공개 저장소에서 실무자 세션 넷이 서로 영향을 주는 작업을 끝까지 다루는 시험을 거쳤다.',
    color: '#e8eae6', mark: '◎', role: '개인 프로젝트 · 설계 및 개발', stack: ['Claude Code 플러그인', 'Python', 'Markdown 규칙', 'Mermaid'],
    links: [
      { label: 'GitHub 저장소', href: 'https://github.com/neisii/harness-naroo' },
      { label: '5분 맛보기', href: 'https://github.com/neisii/harness-naroo/blob/main/QUICKSTART.md' },
      { label: '바탕이 된 실무 사례', href: 'https://neisii.github.io/projects/ai-dlc-si-portfolio/' },
    ],
  },
  {
    slug: 'status-relay',
    date: '2026-11-05',
    name: 'STATUS RELAY',
    title: '서비스 상태를 메뉴 바에서 바로 확인하기',
    period: '2026',
    type: '데스크톱 앱',
    summary: '여러 서비스 상태를 메뉴 바에서 확인하고 장애나 복구 알림을 받으려고 만든 macOS·Windows 트레이 앱.',
    description: 'Atlassian Statuspage API를 주기적으로 확인해 서비스 상태를 추적하도록 만들었다. 가장 심각한 상태는 메뉴 바 아이콘의 색상 배지로 표시하고, 서비스가 저하되거나 복구되면 운영체제 알림을 보낸다. 앱 창을 열지 않고도 트레이 메뉴에서 서비스 상태와 마지막 확인 시각을 확인할 수 있다.',
    color: '#e8e7e2',
    mark: '●',
    role: '개인 프로젝트 · 기획 및 개발',
    stack: ['Rust', 'Tauri 2', 'Tokio', 'reqwest'],
    image: '/images/projects/status-relay.png',
    imageAlt: 'StatusRelay 트레이 메뉴에 Claude, Cloudflare 등 서비스 상태가 표시된 실제 화면',
    links: [{ label: 'GitHub 저장소', href: 'https://github.com/neisii/status-relay' }],
  },
  {
    slug: 'wired-keyboard-transfer-dongle',
    date: '2026-11-05',
    name: 'PLANCK WIRELESS',
    title: '유선 Planck를 무선으로 바꾸는 작은 동글',
    period: '2026 — 진행 중',
    type: '하드웨어 · 펌웨어',
    summary: 'Planck 키보드의 QMK 입력을 Bluetooth LE로 전달하는 슬림 변환기를 구상하고 있다.',
    description: 'Planck 키보드를 개조하지 않고 USB-C 동글을 연결해 무선으로 쓰는 것이 목표입니다. 기획서에는 ESP32-S3 USB Host와 BLE HID를 이용한 입력 전달, 배터리와 보드를 가로로 배치한 얇은 하우징 구상이 담겨 있습니다. 현재 저장소에서 확인되는 구현은 T-Dongle-S3 보드의 APA102 LED 점멸 및 업로드 확인용 테스트 스케치까지이며, 키보드 입력 전달 펌웨어와 BLE 동작은 아직 구현되지 않았습니다.',
    color: '#e5e9e6', mark: '⌁', role: '개인 하드웨어 프로젝트', stack: ['LILYGO T-Dongle-S3', 'ESP32-S3', 'Arduino IDE', 'Adafruit DotStar'],
    links: [],
  },
  {
    slug: 'marknaroo',
    date: '2026-11-05',
    name: 'MARKNAROO',
    title: '마크다운을 바로 읽는 뷰어',
    period: '2026 — 진행 중',
    type: '브라우저 확장 · PWA',
    summary: '공유 렌더링 코어를 바탕으로 로컬 마크다운을 읽는 Chrome 확장과 독립 PWA.',
    description: '마크다운 파일을 편집하거나 업로드하지 않고 읽을 수 있도록 MarkNaroo를 만들었다. TypeScript 공유 코어에서 GFM, 코드 강조, KaTeX, Mermaid, 목차와 테마를 처리하고, Chrome 확장과 standalone PWA에서 각 환경에 맞게 파일을 연다. 두 로컬 폴더는 같은 프로젝트의 사본이라 하나로 정리했다. Chrome 확장은 Chrome 웹스토어에 공개했다(2026년 11월 20일 기준 0.1.1판, 영어·한국어).',
    color: '#e7e9e3', mark: '¶', role: '개인 프로젝트 · 제품 설계 및 개발', stack: ['TypeScript', 'Vite', 'Chrome MV3', 'PWA', 'Vitest'],
    image: '/images/projects/marknaroo/promo-marquee-1400x560.png', imageAlt: '회색 픽셀 고양이와 함께 MarkNaroo, Lightweight Markdown viewer for local .md files, Math · Mermaid · Live reload라고 적힌 홍보 이미지', imageMode: 'wide',
    links: [{ label: 'Chrome 웹스토어', href: 'https://chromewebstore.google.com/detail/marknaroo/dmicfhcicjbdeflfdnkncgpfiomcdnne' }, { label: 'PWA 사용해 보기', href: 'https://neisii.github.io/marknaroo-app/' }],
  },
  {
    slug: 'status-relay-rebuild',
    date: '2026-11-05',
    name: 'STATUS RELAY · REBUILD',
    title: '상태 변화 알림을 보강하는 리빌드',
    period: '일시중단',
    type: '데스크톱 앱 · 실험',
    summary: 'StatusRelay의 상태 변화 알림을 보강해 실용성을 높이려던 별도 작업이다. 현재는 잠시 멈췄다.',
    description: '기존 StatusRelay의 상태 모니터링 흐름에 알림 기능을 보강해, 서비스 장애와 복구를 더 유용하게 받아볼 수 있도록 하는 것이 목표입니다. 현재는 작업을 일시중단한 상태입니다. 기본 앱인 StatusRelay와 구분해 보관합니다.',
    color: '#ece9e3', mark: 'Ⅱ', role: '개인 프로젝트 · 기능 확장 실험', stack: ['알림', '서비스 상태 모니터링'],
    links: [{ label: '기반 프로젝트 StatusRelay', href: 'https://github.com/neisii/status-relay' }],
  },
  {
    slug: 'git-deploy-extractor',
    date: '2026-11-05', name: 'GIT DEPLOY EXTRACTOR',
    title: '커밋 이력에서 배포 파일을 추출하기', period: '2026', type: '데스크톱 앱',
    summary: '선택한 Git 커밋에서 변경 파일을 모아 망 분리 환경으로 옮길 배포 패키지를 만들려고 개발했다.',
    description: '저장소와 브랜치를 고른 뒤 커밋을 추려 변경 파일을 Server Path 규칙에 맞춰 내보내도록 만들었다. 삭제 대상도 extract-list.txt에 담아 내부망에서 적용할 변경을 확인할 수 있게 했다. Git CLI, 커밋 비교, 경로 매핑과 Java 의존성 분석을 결합해 배포 준비를 줄였다.',
    color: '#e8e9e5', mark: '⇢', role: '개인 프로젝트 · 설계 및 개발', stack: ['Electron', 'React', 'TypeScript', 'Git CLI', 'Vitest', 'Playwright'],
    links: [],
  },
  {
    slug: 'cycling-adviser', name: 'CYCLING ADVISER', date: '2026-11-06',
    title: '오늘 라이딩하기 좋은 날일까?', period: '2026', type: '웹 프런트엔드',
    summary: '한국 8개 도시의 날씨를 라이딩 적합도와 복장 추천으로 바꿔 보여주는 웹 앱을 만들었다.',
    description: '기온, 체감온도, 풍속, 강수, 습도와 자외선을 종합해 0–100점 적합도와 5단계 판정을 만들었다. 보온·방수 특성을 고려한 복장과 3일 예보를 보여주며 한국 8개 도시를 지원한다. 데이터는 별도 Cloudflare Worker 백엔드 weather-proxy에서 가져온다.',
    color: '#e6eceb', mark: '↗', role: '개인 프로젝트 · 프런트엔드 개발', stack: ['React 19', 'Vite', 'TanStack Query', 'Tailwind CSS', 'Cloudflare Pages'],
    links: [{ label: 'GitHub 저장소', href: 'https://github.com/neisii/cycling-adviser' }],
  },
  {
    slug: 'weather-proxy', name: 'WEATHER PROXY', date: '2026-11-06',
    title: '여러 날씨 제공자의 데이터를 하나로', period: '2026', type: '백엔드 API',
    summary: '세 날씨 제공자의 응답을 정규화하고 가중 집계해 Cycling Adviser에 전달하는 Worker를 만들었다.',
    description: 'OpenWeather, WeatherAPI, Open-Meteo를 병렬 조회해 필드별 가중치로 집계한다. 제공자 응답이 실패하거나 이상값이면 가중치를 재분배해 가능한 데이터로 응답하도록 했다. 현재 날씨와 3일 예보, 도시 목록, 헬스 체크 API를 제공하고 캐시와 API 키 인증을 적용했다.',
    color: '#e8eaf0', mark: '⌁', role: '개인 프로젝트 · 백엔드 개발', stack: ['Cloudflare Workers', 'TypeScript', 'Vitest', 'Wrangler'],
    links: [{ label: '프로덕션 API', href: 'https://weather-proxy.neisii.workers.dev' }, { label: 'GitHub 저장소', href: 'https://github.com/neisii/weather-proxy' }],
  },
  {
    slug: 'ai-dlc-si-portfolio', name: 'AI-DLC SI PORTFOLIO', date: '2026-11-06',
    title: 'AI-DLC 개발 체계 구축 (SI 실무 사례)', period: '2026.07 — 10', type: '실무 사례 · 웹 포트폴리오',
    summary: 'SI 차세대 구축 사업(계약 도메인)에서 AI 세션 운영 체계를 세워 담당 34화면을 일정보다 한 달 앞서 구현한 실무 사례.',
    description: '처음 맡은 구축형 SI에 도메인 경험 없이 투입돼, AI 세션 여러 개를 역할별로 운영하는 개발 체계를 만들었다. 규칙 13개·스킬 27개·도구 31개로 키웠고, 결정·규칙·도구 제작 권한을 세션마다 나눈 역할 세션 7개를 10분 주기 점검과 함께 운영했다. 담당 34화면 가운데 26화면은 시나리오 검증을 거쳤고, 인계 문서 52편을 남겼다. 사이트에는 성과, 원칙, 경과, 하네스, 사례, 효과와 한계를 정리했다. 이 경험을 누구나 쓸 수 있게 일반화한 도구가 harness-naroo다.',
    color: '#e7e9ef', mark: '↗', role: '실무 · 개발 체계 설계와 운영', stack: ['Claude Code', 'AI-DLC', 'Spring Boot', 'Playwright'],
    links: [
      { label: '포트폴리오 사이트', href: 'https://neisii.github.io/ai-dlc-si-portfolio/' },
      { label: 'GitHub 저장소', href: 'https://github.com/neisii/ai-dlc-si-portfolio' },
      { label: '공개 도구로 만든 것: harness-naroo', href: 'https://neisii.github.io/projects/harness-naroo/' },
    ],
  },
  {
    slug: 'ai-development-orchestrator', name: 'AI DEVELOPMENT ORCHESTRATOR', date: '2026-11-06',
    title: '여러 AI 에이전트의 개발 작업 조율하기', period: '2026', type: '개발 도구',
    summary: '사람이 전체 과정을 판단하고 승인하면서 여러 프로젝트별 AI 에이전트를 조율하는 오케스트레이션 시스템.',
    description: '여러 프로젝트를 각각 독립적인 AI 에이전트가 맡고, 사람이 요구사항과 설계, 판단, 개입을 담당하는 개발 파이프라인을 만들었다. 오케스트레이터가 에이전트 프로세스를 관리하고 질문·답변 승인, 이벤트 기록, Scribe의 의사결정 기록, 중단·재개와 직접 지시를 조율한다. 실제 사용자 프로젝트에 연결해 다중 에이전트 시나리오도 검증했다.',
    color: '#e9e8e4', mark: '↔', role: '개인 프로젝트 · 설계 및 개발', stack: ['Node.js', 'TypeScript', 'MCP', 'SQLite', 'Claude Code'],
    links: [{ label: 'GitHub 저장소', href: 'https://github.com/neisii/ai-development-orchestrator' }],
  },
  {
    slug: 'dependency-sweeper', name: 'DEPENDENCY SWEEPER', date: '2026-11-06',
    image: '/images/projects/dependency-sweeper.png', imageAlt: 'Dependency Sweeper의 Task 의존 관계와 90초 타이머가 보이는 게임 화면', imageMode: 'portrait',
    title: '90초 안에 의존성 Task를 모두 끝내기', period: '2026', type: '미니 게임',
    summary: '선행 작업을 조사하고 순서를 정해 Sprint Backlog의 Task 10개를 시간 안에 처리하는 전략 게임.',
    description: '개발 중 작업을 시작하면 숨은 선행 작업이 드러나는 상황을 지뢰찾기식 시간 압박으로 옮겼다. 90초 안에 메인 Task 10개를 완료해야 한다. Task를 클릭해 처리하고, 잠긴 항목을 조사해 선행 관계를 공개한다. 선행 Task를 완료할수록 후속 작업의 성공률이 높아져 우선순위 선택이 중요하다. PC와 모바일에서 플레이할 수 있다.',
    color: '#e9e9e3', mark: '✳', role: '개인 프로젝트 · 게임 설계 및 개발', stack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
    links: [{ label: '게임 플레이', href: 'https://neisii.github.io/dependency-sweeper/' }, { label: 'GitHub 저장소', href: 'https://github.com/neisii/dependency-sweeper' }],
  },
  {
    slug: 'napkin-smash', name: 'NAPKIN SMASH', date: '2026-11-06',
    image: '/images/projects/napkin-smash.png', imageAlt: 'Napkin Smash의 카페 테이블과 냅킨을 치우는 60초 게임 시작 화면', imageMode: 'wide',
    title: 'Napkin Smash', period: '2026', type: '미니 게임',
    summary: '카페 테이블 위 냅킨을 60초 동안 최대한 많이 스매시해 짜증을 푸는 미니 게임.',
    description: '카페 생존 게임 콘셉트로 Napkin Smash를 만들었다. 60초 동안 클릭이나 터치로 테이블 위 냅킨을 최대한 많이 스매시하고, 점수를 올리며 짜증 게이지를 관리하는 게임이다.',
    color: '#eee8e3', mark: '✳', role: '개인 프로젝트', stack: ['미니 게임'],
    links: [{ label: 'GitHub 저장소', href: 'https://github.com/neisii/napkin-smash' }],
  },
  {
    slug: 'astroxx',
    date: '2025-07-30', name: 'ASTROXX', title: '기록을 위한 작은 블로그', period: '2025 — 진행 중', type: '웹사이트',
    summary: '읽고 쓰는 일에 집중하려고 만들고 있는 개인 아카이브.',
    description: 'Astro와 MDX로 글을 발행하고 읽는 경험을 다듬고 있다. 프로젝트와 글을 한곳에서 이어 보여주는 아카이브로 키우는 중이다.',
    color: '#e8ece6', mark: '✳', role: '기획 · 디자인 · 개발', stack: ['Astro', 'MDX', 'Tailwind CSS'], links: [],
  },
];
