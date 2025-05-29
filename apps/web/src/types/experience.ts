export interface Experience {
  name: string;
  company: string;
  duration: string;
  description?: string;
}

export interface ExperienceContent {
  title: string;
  description: string;
  experiences: Experience[];
}
