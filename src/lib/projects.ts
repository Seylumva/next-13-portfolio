export const projects = [
  {
    name: "Personal Blog & Portfolio",
    description:
      "The very site you're on! Built with Sanity.io and Next.js 13 and deployed to Vercel.",
    year: 2023,
    link: "https://github.com/Seylumva/next-13-portfolio",
  },
  {
    name: "Link Shrub",
    description:
      "An alternative to Linktree for creators looking for elegance and simplicity",
    year: 2022,
    link: "https://github.com/Seylumva/linktree-clone",
  },
  {
    name: "Squishtrade",
    description:
      "A prototype for a marketplace focused on stuffed animals and selling them at retail prices.",
    year: 2022,
    link: "https://github.com/Seylumva/squishtrade",
  },
  {
    name: "TFT Set 6.5 API (Unofficial)",
    description:
      "An unofficial API for the game Teamfight Tactics Set 6.5 to provide game data and assets.",
    year: 2022,
    link: "https://github.com/Seylumva/tft-neon-nights-api",
  },
];

export type Project = {
  name: string;
  description: string;
  year: number;
  link: string;
};
