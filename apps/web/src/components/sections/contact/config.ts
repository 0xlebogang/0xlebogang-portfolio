import type { Contact } from "@/types/contact";
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "phoshokolebogang@outlook.com",
  socials: [
    {
      name: "Github",
      href: "https://github.com/0xlebogang",
      Icon: SiGithub,
    },
    {
      name: "Youtube",
      href: "https://youtube.com/@onlyphantomleii",
      Icon: SiYoutube,
    },
    {
      name: "X",
      href: "https://x.com/onlyphantomleii",
      Icon: SiX,
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/phoshokoml",
      Icon: SiLinkedin,
    },
  ],
};

export { contact };
