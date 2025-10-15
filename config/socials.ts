import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Yordanos7",
    icon: Icons.gitHub,
    link: "https://github.com/Yordanos7",
  },
  {
    name: "LinkedIn",
    username: "Yordanos Yohans",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yordanos-yohans-204b292ab",
  },
  {
    name: "Twitter",
    username: "@yordanos655739",
    icon: Icons.twitter,
    link: "https://x.com/yordanos655739",
  },
  {
    name: "Gmail",
    username: "yordanosyohans7",
    icon: Icons.gmail,
    link: "mailto:yordanosyohans7@gmail.com",
  },
];
