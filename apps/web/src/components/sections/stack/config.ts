import type { StackContent } from "@/types/stack";

const content: StackContent = {
  title: "My Stack",
  description:
    "Here are the technologies I use most for development. I also have a demonstrable ability to learn new technologies quickly and can adapt to different tech stacks.",
  stacks: [
    {
      name: "TypeScript",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        alt: "TypeScript Icon",
      },
      description:
        "Since adopting TypeSript, it has wormed its way into nearly all my projects. I appreciate the added type safety and improved developer experience it provides.",
    },
    {
      name: "Python",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        alt: "Python Icon",
      },
      description:
        "My experience with Python is just about as old as my programming journey. It is the first programming language I learnt and for most of my projects, its used to build APIs using the Django framework (DRF). Recently I've tinkered with FastAPI and Flask.",
    },
    {
      name: "Go",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
        alt: "Go Icon",
      },
      description:
        "Go is a language I've recently fell in love with. I learnt it on Frontend Masters' Go course by Maximiliano Firtman. I've used it to build simple web APIs using the Echo and Gin frameworks. I love how it simplifies low level programming concepts, while still being performant.",
    },
    {
      name: "Docker",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        alt: "Docker Icon",
      },
      description:
        "Docker has been a key part of my development work, and I can't imagine my workflow without it. I mainly use it for testing my apps, experimenting with new software and packaging functional apps. This has been a fundamental tool in all my hackathon projects.",
    },
    {
      name: "Linux",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        alt: "Docker Icon",
      },
      description:
        "Fedora Linux is my daily work station. I love it! It has become my go-to operating system after a long journey of trying out different distros. I use it for everything, development, school & even gaming.",
    },
    {
      name: "DigitalOcean",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg",
        alt: "DigitalOcean Icon",
      },
      description:
        "DigitalOcean is the cloud provider I am most competent with. This is where my homelab is hosted. I mainly use their Droplets (VMs) to host the services I find. It has been a fundamental part of my learning journey into cloud, DevOps, Networking and infrastructure management.",
    },
    {
      name: "Azure",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
        alt: "Azure Icon",
      },
      description:
        "I have tinkered with MS Azure for just a year, thanks to the GitHub Student Developer Pack. This is where I first started with cloud computing and self-hosting.",
    },
    {
      name: "Terraform",
      thumbnail: {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
        alt: "Terraform Icon",
      },
      description:
        "Since getting into self-hosting and cloud, Terraform became a tool I sought to learn and has become a big part of how I manage the infrastructure I use in my homelab.",
    },
  ],
};

export { content };
