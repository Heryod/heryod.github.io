export const projectStatusLabels = {
  wip: {
    pl: "WIP",
    en: "WIP",
  },
  archived: {
    pl: "Archiwalny",
    en: "Archived",
  },
  active: {
    pl: "Działa",
    en: "Live",
  },
} as const;

export type ProjectStatus = keyof typeof projectStatusLabels;
