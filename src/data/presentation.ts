

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
  mail: "k3vlphd@gmail.com",
  title: "Hi, I’m wubia",
  profile: "/portrait.webp",
  description:
    "I am a Web Devloper who is currently based in Germany, Berlin, and I am currently absolving a 3 year apprenticeship",
  socials: [
    {
      label: "Github",
      link: "https://github.com/wubia-one",
    },
    {
      label: "Discord | wubia",
      link: "",
    },
  ],
};

export default presentation;
