import portrait from "public/portrait.webp"


type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "email@example.com",
  title: "Hi, I’m wubia",
  profile: "/wubia-one/portrait.webp",
  description:
    "I am a Web Devloper who is currently based in Germany, Berlin.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/wubia-one/",
    },
    {
      label: "Github",
      link: "https://github.com/wubia-one",
    },
    {
      label: "Discord",
      link: "https://discord.gg/fVjx846VCc",
    },
  ],
};

export default presentation;
