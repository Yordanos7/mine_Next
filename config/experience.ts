import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "upwork_freelance",
    position: "Freelance Full-Stack Developer",
    company: "Upwork",
    location: "Remote",
    startDate: new Date("2026-01-01"),
    endDate: "Present",
    description: [
      "Experienced freelance full-stack developer with a proven track record of delivering high-quality web and application solutions for clients worldwide.",
      "Specialized in building secure, scalable, and performant applications using modern technologies such as React, Next.js, Node.js, Express, Tailwind CSS, TypeScript, Prisma, and PostgreSQL.",
      "Focused on understanding client requirements, translating them into robust technical solutions, and delivering projects on time while maintaining high standards of code quality and user experience.",
      "Comfortable with full project lifecycle management — from planning, architecture, and development to deployment and post-launch support.",
      "Adapt at remote collaboration, working closely with clients to provide progress updates, implement feedback, and ensure complete client satisfaction.",
    ],
    achievements: [
      "Successfully delivered multiple freelance projects for clients globally, earning positive reviews for quality, reliability, and professionalism.",
      "Built secure web applications and browser extensions with real-time data handling, encrypted communications, and advanced analytics dashboards.",
      "Demonstrated ability to handle complex full-stack projects independently while managing timelines and client expectations.",
      "Consistently maintained strong communication, project transparency, and responsive support throughout all engagements.",
      "Established a reputation on Upwork as a reliable, detail-oriented, and technically skilled full-stack developer.",
    ],
    skills: [
      "React",
      "Next.js",
      "Vite",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.io",
      "Web Security",
      "Full-Stack Development",
      "API Integration",
      "Real-Time Applications",
    ],
    companyUrl: "https://www.upwork.com/freelancers/~01cbdb5c65431da143",
    logo: "/experience/upwork-logo.svg",
  },
  {
    id: "soserunion",
    position: "Full-Stack Developer",
    company: "Soser Saving & Credit Cooperative Union LTD",
    location: "Dangla, Ethiopia",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2026-01-15"),
    description: [
      "Developed a modern and secure digital banking platform for members of Soser Union.",
      "Integrated Ethiopian mobile payment systems such as TeleBirr, Awash Bank, and Bank of Abyssinia for seamless transactions.",
      "Designed and implemented a real-time financial dashboard for tracking savings trends, loan distributions, and member activity.",
      "Built a multimedia hub for community news, events, and educational workshops.",
      "Ensured high performance, accessibility, and cross-device compatibility using modern web technologies."
    ],
    achievements: [
      "Delivered a production-ready full-stack platform in under 9 months, serving hundreds of members.",
      "Implemented bank-level security features, including multi-factor authentication and data encryption, protecting sensitive member information.",
      "Developed a real-time dashboard providing actionable insights into financial activity, improving transparency and decision-making for members.",
      "Integrated multiple mobile payment platforms, allowing instant and reliable transactions for cooperative members.",
      "Created a multimedia-rich news and events hub to increase community engagement and awareness.",
      "Optimized the platform for fast load times, responsive design, and accessibility across devices."
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Node.js",
      "Express",
      "REST API",
      "Authentication & Security"
    ],
    companyUrl: "https://soserunion.com",
    logo: "/experience/soserunion-logo.png",
  },
];
