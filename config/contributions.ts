export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "Browsemind Chrome Extension",
    contibutionDescription:
      "Built and maintained Browsemind, a Chrome extension that intelligently tracks and analyzes users’ browsing activity to provide insights into online behavior, productivity patterns, and usage trends. Designed the extension architecture, implemented background scripts and content scripts, handled data collection and storage logic, and focused on performance, privacy, and a smooth user experience.",
    repoOwner: "Yordanos7",
    link: "https://github.com/Yordanos7/Browsemind_chrome_extension",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 1);
