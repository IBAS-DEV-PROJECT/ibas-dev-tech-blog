export type ProjectTagId = 'ibas' | 'incherin' | 'spoti-test' | 'joalarm' | 'misc';

export interface ProjectTag {
  id: ProjectTagId;
  label: string;
  description?: string;
}

export const PROJECT_TAGS: ProjectTag[] = [
  { id: 'ibas', label: 'IBAS', description: 'IBAS DEV 공식 프로젝트' },
  { id: 'incherin', label: 'Incherin', description: 'Incherin 서비스 관련 기록' },
  { id: 'spoti-test', label: 'SPOTI-TEST', description: 'Spotify 기반 실험 프로젝트' },
  { id: 'joalarm', label: '좋알람', description: '좋알람 연동 제품 개발 노트' },
  { id: 'misc', label: '기타', description: '그 외 프로젝트 및 실험' },
];

export const PROJECT_TAG_IDS = PROJECT_TAGS.map((tag) => tag.id) as ProjectTagId[];

export const PROJECT_TAG_OPTIONS = PROJECT_TAGS.map((tag) => ({
  value: tag.id,
  label: tag.label,
}));
