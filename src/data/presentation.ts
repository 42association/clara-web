type Social = {
  label: string;
  link: string;
};

type Presentation = {
  image: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  image: "/42tokyo.svg",
  title: "Hi, We are アクアクララ盛り上げ隊 👋",
  // profile: "/profile.webp",
  description:
    "私たちは、毎月*50本*の12Lボトルを無償でご提供いただいてるアクアクララさんに感謝するため、2ヶ月に1回、感謝の正拳突きを行うことにしました。",
  socials: [
    {
      label: "X",
      link: "https://x.com/42_tokyo",
    },
    {
      label: "Project AquaClara",
      link: "https://clara.cosmicdust.io",
    },
    {
      label: "Github",
      link: "https://github.com/tmyuu/project-aquaclara/tree/tmyuu",
    },
  ],
};

export default presentation;
