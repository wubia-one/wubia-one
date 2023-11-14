export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Dotfiles",
    techs: ["bash, zsh"],
    link: "https://github.com/wubia-one/Dotfiles"}
    ,{
      title: "FEX - Project",
      techs:["FireBase", "TypeScript", "Astro"],
      link:"https://github.com/comboomPunkTsucht/fex-projekt"
    }
];

export default projects;
