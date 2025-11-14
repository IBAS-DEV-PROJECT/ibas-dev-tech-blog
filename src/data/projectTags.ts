export type ProjectTagId = 'ibas' | 'incherin' | 'spoti-test' | 'joalarm' | 'misc';

export interface ProjectTag {
  id: ProjectTagId;
  label: string;
  description?: string;
  colorClass?: string;
}

export const PROJECT_TAGS: ProjectTag[] = [
  {
    id: 'ibas',
    label: 'IBAS',
    description: 'IBAS DEV 공식 프로젝트',
    colorClass: 'bg-accent/10 text-accent',
  },
  {
    id: 'incherin',
    label: 'Incherin',
    description: 'Incherin 서비스 관련 기록',
    colorClass: 'bg-[#e0eeff] text-[#2563eb]',
  },
  {
    id: 'spoti-test',
    label: 'SPOTI-TEST',
    description: 'Spotify 기반 실험 프로젝트',
    colorClass: 'bg-[#d7f9d2] text-[#0e9f1a]',
  },
  {
    id: 'joalarm',
    label: '좋알람',
    description: '좋알람 연동 제품 개발 노트',
    colorClass: 'bg-[#ffe0f0] text-[#d41463]',
  },
  {
    id: 'misc',
    label: '기타',
    description: '그 외 프로젝트 및 실험',
    colorClass: 'bg-muted-light text-muted',
  },
];

export const PROJECT_TAG_IDS = PROJECT_TAGS.map((tag) => tag.id) as ProjectTagId[];

export const PROJECT_TAG_OPTIONS = PROJECT_TAGS.map((tag) => ({
  value: tag.id,
  label: tag.label,
}));
