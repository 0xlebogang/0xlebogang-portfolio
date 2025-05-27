export interface Project {
  title: string;
  description?: string;
  date?: Date | string;
  website?: string;
  github?: string;
  tags?: { label: string }[];
  // Todo: Implement a project thumbnail
  // thumbnail?: {
  //   src: string;
  //   alt: string;
  // };
}

export interface ProjectsPage {
  title: string;
  description: string;
  projects: Project[];
}
