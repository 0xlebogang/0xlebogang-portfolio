import type { StackContent } from "@/types/stack";

const content: StackContent = {
  title: "My Stack",
  description:
    "Here are the technologies I use most for development. I also have a demonstrable ability to learn new technologies quickly and can adapt to different tech stacks.",
  stacks: [
    {
      name: "Next.js",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        alt: "Next.js Icon",
      },
      description:
        "I've primarily used the Next.js framework for most of my projects, leveraging its powerful server-side rendering and static site generation capabilities. The framework provides an excellent foundation for building modern, high-performance web applications. I would really like to see what bigger projects that use Next.js look like.",
    },
    {
      name: "Python",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        alt: "Python Icon",
      },
      description:
        "My experience with Python is just about as old as my programming journey. It is the first ever programming language I learnt and for most of my projects, its used to build APIs using the Django framework (DRF). I've read that this is a popular web framework, and I would love to see how it is in larger scale projects.",
    },
    {
      name: "C++",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
        alt: "Python Icon",
      },
      description:
        "I have made considerable progress in C++ programming. I have used it to solve problems on platforms CodeWars. I am still learning the language, but I have a good understanding of its core concepts and features. I would love to see how C++ is used in larger scale projects, especially in the context of systems development.",
    },
    {
      name: "Docker",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        alt: "Docker Icon",
      },
      description:
        "Docker has been a key part of my development work, and I can't imagine my workflow without it. I mainly use it for testing my apps, experimenting with new software and packaging functional apps. This is really helpful when working with teams during hackathons, where we need to easily share our code and components. I am curious as to how this tool is used at scale.",
    },
    {
      name: "Fedora Linux",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fedora/fedora-original.svg",
        alt: "Docker Icon",
      },
      description:
        "Fedora Linux is my daily work station. I love it! It has become my go-to operating system after a long journey of trying out different distros. I use it for everything, development, school & even gaming.",
    },
  ],
};

export { content };
