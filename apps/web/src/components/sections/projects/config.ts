import type { ProjectsPage } from "@/types/project";
import { project } from "@/app/source";

const sortedProjects = [...project.getPages()].sort((a, b) => {
  const dateA =
    a.data.date instanceof Date ? a.data.date : new Date(a.data.date);
  const dateB =
    b.data.date instanceof Date ? b.data.date : new Date(b.data.date);
  return dateB.getTime() - dateA.getTime();
});

const projectsData = sortedProjects.map((page) => ({
  url: page.url,
  title: (page.data.title || page.slugs[0]) ?? "Untitled Project",
  description: page.data.description,
  date: page.data.date,
  website: page.data.website,
  github: page.data.github,
  tags: page.data.tags,
  slugs: page.slugs,
  thumbnail: `/images/projects/${page.slugs[0]}/cover.png`,
}));

const content: ProjectsPage = {
  title: "Projects",
  description:
    "Here is a collection of my projects, showcasing my skills, interests and progress in my journey.",
  projects: projectsData,
};

export { content };
