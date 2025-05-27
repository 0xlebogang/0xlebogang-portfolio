import type { ProjectsPage } from "@/types/project";
import { project } from "@/app/source";

export const sortedProjects = [...project.getPages()].sort(
  (a, b) => b.data.date.getTime() - a.data.date.getTime(),
);

const content: ProjectsPage = {
  title: "Projects",
  description:
    "Here is a collection of my projects, showcasing my skills, interests and progress in my journey.",
  projects: sortedProjects.map((p) => ({
    title: p.data.title,
    description: p.data.description,
    date: p.data.date,
    website: p.data.website,
    github: p.data.github,
    tags: p.data.tags?.map((tag) => ({
      label: tag.label,
    })),
  })),
};

export { content };
