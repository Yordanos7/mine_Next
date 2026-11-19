import { ValidSkills } from "./constants";

export interface CertificateInterface {
  title: string;
  type: string;
  issuer: string;
  issuedDate: string;
  image: string;
  pdf?: string;
  description: string;
}

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
  certificate?: CertificateInterface;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ethiora-technology",
    position: "Co-Founder & Technical Lead",
    company: "Ethiora Technology PLC (ኢትዮራ ቴክኖሎጂ)",
    location: "Addis Ababa, Ethiopia",
    startDate: new Date("2025-01-01"),
    endDate: "Present",
    description: [
      "Co-founded and officially registered Ethiora Technology PLC, spearheading enterprise product architecture, engineering teams, and digital healthcare solutions across Ethiopia.",
      "Architected and deployed Ethiora HMS — an offline-resilient Hospital Management & EMR Platform deployed in regional clinics and hospital centers across healthcare facilities.",
      "Engineered the Remote Digital Card System (የርቀት ካርድ መቁረጫ), integrating Telebirr and CBE Birr pre-payment gates to eliminate 40-minute card room queues and stop financial leakages for medical centers.",
      "Designed bilingual (Amharic & English) clinical interfaces, automated FEFO pharmacy inventory defense, permanent QR patient IDs, and automated Ministry of Health (MoH) DHIS2 e-HMIS reporting compliance.",
      "Direct technical outsourcing strategies, enterprise systems architecture, and technology modernization initiatives for institutional and private clients.",
    ],
    achievements: [
      "Co-founded Ethiora Technology PLC as an officially registered Ethiopian tech enterprise and scaled its core platform offerings.",
      "Built and deployed Ethiora HMS across active regional medical facilities, recovering 18–25% in previously leaked clinical revenue via automated pre-payment gates.",
      "Engineered an offline-first distributed architecture that ensures 100% continuous medical workflow even during internet disruptions.",
      "Integrated Ethiopian mobile payment rails (Telebirr & CBE Birr) for automated VIP appointment reservations and cashier handoff audits.",
      "Led end-to-end full-stack engineering across Next.js, Node.js, PostgreSQL, and high-security role-based access systems.",
    ],
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "REST API",
      "Web Security",
      "Authentication & Security",
      "Full-Stack Development",
      "API Integration",
      "Real-Time Applications",
      "Git",
    ],
    companyUrl: "mailto:ethioratechnology@gmail.com",
    logo: "/experience/ethiora-logo.png",
  },
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
      "Adept at remote collaboration, working closely with clients to provide progress updates, implement feedback, and ensure complete client satisfaction.",
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
    id: "amani-solutions",
    position: "Dev Team Lead",
    company: "Amani Solutions PLC",
    location: "Addis Ababa, Ethiopia",
    startDate: new Date("2026-05-25"),
    endDate: new Date("2026-08-27"),
    description: [
      "Served as Dev Team Lead during a 90-day intensive engineering engagement with Amani Solutions PLC.",
      "Contributed to architecting and building Ethiopia's credit intelligence infrastructure, designed to empower over 8 million SACCO (Savings and Credit Cooperative) members nationwide.",
      "Guided the dev team through full development cycles, data engineering workflows, and system integration.",
      "Engineered high-performance data ingestion pipelines for Sage 50 accounting records, ensuring robust financial calculations and data consistency.",
      "Collaborated closely with executive and domain leadership to deliver production-grade platforms with bank-grade security standards.",
    ],
    achievements: [
      "Awarded Official Certificate of Completion recognizing leadership as Dev Team Lead.",
      "Spearheaded engineering of credit intelligence infrastructure serving 8M+ SACCO members across Ethiopia.",
      "Delivered a high-performance, automated ingestion layer for Sage 50 financial datasets.",
      "Successfully coordinated developer sprints, code reviews, and architecture decisions to hit project deadlines.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Full-Stack Development",
      "API Integration",
      "Web Security",
      "Git",
    ],
    companyUrl: "https://amani.et",
    logo: "/experience/amani-logo.png",
    certificate: {
      title: "Certificate of Completion - Dev Team Lead",
      type: "Certificate of Completion",
      issuer: "Amani Solutions PLC",
      issuedDate: "August 27, 2026",
      image: "/certificates/amani-certificate.png",
      pdf: "/certificates/amani-certificate.pdf",
      description:
        "Certifies that Yordanos Yohannes has successfully completed a 90-day internship with Amani Solutions, serving as Dev Team Lead on the Dev Team, and contributed to building Ethiopia's credit intelligence infrastructure for 8 million SACCO members.",
    },
  },
  {
    id: "soserunion",
    position: "Lead Full-Stack Developer",
    company: "Soser Saving & Credit Cooperative Union LTD",
    location: "Dangila, Ethiopia",
    startDate: new Date("2025-05-01"),
    endDate: new Date("2026-01-15"),
    description: [
      "Guided the engineering team as Lead Developer in designing, developing, and deploying the official web platform and digital banking ecosystem for Soser Union.",
      "Integrated Ethiopian mobile payment systems including TeleBirr, Awash Bank, and Bank of Abyssinia for reliable, instant member transactions.",
      "Designed and implemented a real-time financial analytics dashboard for tracking savings trends, loan disbursements, and member account activities.",
      "Built a multimedia hub for cooperative news, community announcements, and educational workshops.",
      "Modernized operations, streamlined workflows, and significantly strengthened the Union's digital future across Dangila and Northwest Ethiopia.",
    ],
    achievements: [
      "Honored with the official Certificate of Excellence from the General Manager for exceptional leadership and technical expertise.",
      "Delivered a production-ready full-stack platform serving hundreds of members across the region.",
      "Implemented bank-level security features including multi-factor authentication, secure session handling, and data encryption.",
      "Integrated multiple Ethiopian mobile payment gateways (TeleBirr, Awash, Abyssinia) for automated member savings and loan settlements.",
      "Created an actionable financial analytics dashboard that improved organizational transparency and data-backed decision making.",
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
      "Authentication & Security",
      "Web Security",
      "Full-Stack Development",
    ],
    companyUrl: "https://soserunion.com",
    logo: "/experience/soserunion-logo.png",
    certificate: {
      title: "Certificate of Excellence - Lead Developer",
      type: "Certificate of Excellence",
      issuer: "Soser Saving & Credit Cooperative Union LTD",
      issuedDate: "August 30, 2025",
      image: "/certificates/soser-certificate.png",
      description:
        "In recognition of exceptional leadership and technical expertise in designing, developing, and deploying the official web platform for Soser Saving & Credit Cooperative Union LTD. From July 1, 2025, to August 30, 2025, as the lead developer, guided a team to deliver innovative, scalable, and secure solutions, transforming the Union's digital ecosystem in Dangila, Northwest Ethiopia.",
    },
  },
];
