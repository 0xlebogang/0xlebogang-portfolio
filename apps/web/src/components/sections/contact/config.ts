import type { Contact } from "@/types/contact";
import {
    SiDiscord,
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "dev.phoshoko.ml@gmail.com",
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
        name: "Discord",
        href: "https://discord.com/users/1108815801873617007",
        Icon: SiDiscord,
    },
    {
      name: "X",
      href: "https://x.com/0xlebogang",
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
