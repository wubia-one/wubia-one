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
  
];

export default projects;
