export interface Project {
  url: string;
  title: string;
  description?: string;
  date?: Date | string;
  website?: string;
  github?: string;
  tags?: { label: string }[];
  slugs: string[];
  thumbnail: string;
}

export interface ProjectsPage {
  title: string;
  description: string;
  projects: Project[];
}
