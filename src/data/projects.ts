export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "ディスプレイハック",
    techs: ["42Tokyoに設置されたiMacの壁紙をハックしました"],
    link: "https://x.com/42_tokyo/status/1762054996487815247?s=20",
  },
  {
    title: "イベント / ハッカソン",
    techs: ["最終目標"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
