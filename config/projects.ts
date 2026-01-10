import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | null;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "soser-union",
    companyName: "Soser Union",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "UI/UX"],
    shortDescription:
      "Developed a modern and secure web platform for Soser Saving & Credit Cooperative Union LTD, enabling digital banking and inclusive financial services for the Amhara Region.",
    websiteLink: "https://soserunion.com",
    techStack: [
      "Next.js",
      "React",
      "Typescript",
      "Tailwind CSS",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
    ],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-01-15"),
    companyLogoImg: "/projects/soserunion/logo.png",
    pagesInfoArr: [
      {
        title: "Digital Banking Portal",
        description:
          "Secure interface for members to manage savings, loans, and digital payments via TeleBirr and other local banks.",
        imgArr: [
          "/projects/soserunion/portal_1.webp",
          "/projects/soserunion/portal_2.webp",
        ],
      },
      {
        title: "Financial Dashboard",
        description:
          "Real-time tracking of savings trends, loan disbursements, and inclusive banking growth for the cooperative union.",
        imgArr: ["/projects/soserunion/dashboard.webp"],
      },
      {
        title: "Community & Media Hub",
        description:
          "Platform updates, news, and multimedia gallery showcasing community events and workshops in Dangla and surrounding areas.",
        imgArr: ["/projects/soserunion/news.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Soser Union is a modern and secure web platform designed for Soser Saving & Credit Cooperative Union LTD, a membership-based financial cooperative committed to digital transformation and inclusive banking. The platform empowers members across Ethiopia's Amhara Region to achieve financial prosperity through easily accessible digital services.",
        "I led the development of this platform, focusing on security and user experience. The site integrates seamlessly with popular Ethiopian mobile money services like TeleBirr, Awash Bank, and Bank of Abyssinia, facilitating instant transfers and account management. We implemented bank-level security features, including advanced encryption and multi-factor authentication, to protect member data.",
        "The architecture leverages Next.js for high performance and SEO, with a robust backend using Prisma and PostgreSQL. The user-friendly interface allows for quick QR code payments and provides real-time insights into financial products, fostering community engagement through educational updates and workshop announcements.",
      ],
      bullets: [
        "Developed a modern, secure platform for a financial cooperative serving the Amhara Region.",
        "Integrated mobile payment solutions with TeleBirr, Awash Bank, and Bank of Abyssinia.",
        "Implemented bank-level security with multi-factor authentication and data encryption.",
        "Designed a real-time financial dashboard for tracking savings trends and loan distributions.",
        "Created a multimedia-rich news and events hub for cooperative community engagement.",
        "Optimized for high performance and digital accessibility across diverse device types.",
      ],
    },
  },
  {
    id: "browsmind",
    companyName: "BrowsMind",
    type: "Personal",
    category: ["Chrome Extension", "Productivity", "Analytics", "Privacy"],
    shortDescription:
      "Built a powerful Chrome extension that tracks and analyzes users’ browsing activity to provide productivity insights, usage analytics, and digital behavior awareness while respecting user privacy.",
    websiteLink: "https://chrome.google.com/webstore",
    techStack: [
      "Javascript",
      "Typescript",
      "Chrome Extensions API",
      "React",
      "Vite",
      "Tailwind CSS",
      "IndexedDB",
      "Chart.js",
    ],
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-09-01"),
    companyLogoImg: "/projects/browsmind/logo.png",
    pagesInfoArr: [
      {
        title: "Browsing Activity Tracker",
        description:
          "Automatically records visited websites, session durations, and browsing frequency in real time using Chrome’s extension APIs.",
        imgArr: [
          "/projects/browsmind/tracker_1.webp",
          "/projects/browsmind/tracker_2.webp",
        ],
      },
      {
        title: "Productivity & Analytics Dashboard",
        description:
          "Visual dashboard showing daily, weekly, and monthly browsing patterns with charts, time distribution, and most-visited domains.",
        imgArr: ["/projects/browsmind/dashboard.webp"],
      },
      {
        title: "Privacy & Data Control Center",
        description:
          "Users can pause tracking, delete specific activity logs, export data, or fully reset stored information at any time.",
        imgArr: ["/projects/browsmind/privacy.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "BrowsMind is a Chrome extension designed to help users understand and improve their digital habits by tracking browsing activity in a transparent and privacy-focused way. The extension captures essential activity data such as visited domains, active session time, and usage frequency, transforming raw data into meaningful insights.",
        "I designed and developed BrowsMind from the ground up, focusing on performance, accuracy, and user trust. All data is stored locally using IndexedDB, ensuring users maintain full control over their browsing information without relying on external servers or third-party tracking services.",
        "The extension features a clean, intuitive dashboard built with React and Tailwind CSS, offering interactive charts and summaries that help users identify productivity leaks, reduce distractions, and optimize online behavior. BrowsMind is lightweight, fast, and seamlessly integrates into daily browsing without affecting performance.",
      ],
      bullets: [
        "Developed a Chrome extension to track and analyze user browsing activity in real time.",
        "Built a productivity-focused analytics dashboard with visual insights and trends.",
        "Implemented local-first data storage using IndexedDB for enhanced privacy.",
        "Used Chrome Extensions API to monitor tabs, URLs, and session duration accurately.",
        "Designed a clean, modern UI with React, Vite, and Tailwind CSS.",
        "Added full user control features including pause tracking, data deletion, and export.",
        "Optimized performance to ensure minimal impact on browser speed and memory.",
      ],
    },
  },
  {
    id: "yalegn",
    companyName: "Yalegn",
    type: "Personal",
    category: ["Web App", "Mobile App", "All-in-One", "Ethiopia"],
    shortDescription:
      "An all-in-one Ethiopian platform designed to tackle real-life challenges across multiple sectors, providing solutions for marketplace, finance, services, jobs, and community engagement.",
    websiteLink: "https://yalegn.onrender.com/",
    techStack: [
      "Next.js",
      "React Native",
      "Typescript",
      "Tailwind CSS",
      "Firebase",
      "Prisma",
      "PostgreSQL",
      "Node.js",
      "Express",
      "Vercel",
    ],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-12-31"),
    companyLogoImg: "/projects/yalegn/logo.png",
    pagesInfoArr: [
      {
        title: "Marketplace & Commerce",
        description:
          "A local marketplace that connects buyers and sellers across Ethiopia, enabling smooth trade, product discovery, and secure transactions.",
        imgArr: [
          "/projects/yalegn/marketplace_1.webp",
          "/projects/yalegn/marketplace_2.webp",
        ],
      },
      {
        title: "Daily Financial & Currency Flow",
        description:
          "Provides real-time tracking of financial activities, currency exchange rates, micro-loans, and payment flows for both individuals and businesses.",
        imgArr: [
          "/projects/yalegn/finance_1.webp",
          "/projects/yalegn/finance_2.webp",
        ],
      },
      {
        title: "Jobs & Freelancing",
        description:
          "Connects job seekers with employers, provides freelance opportunities, and supports skill development tailored for the Ethiopian job market.",
        imgArr: ["/projects/yalegn/jobs_1.webp", "/projects/yalegn/jobs_2.webp"],
      },
      {
        title: "Community & Local Services",
        description:
          "Facilitates local service listings, community events, announcements, and problem-solving initiatives across Ethiopian cities and regions.",
        imgArr: [
          "/projects/yalegn/community_1.webp",
          "/projects/yalegn/community_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Yalegn is a comprehensive platform designed to address real problems in Ethiopia across marketplace commerce, finance, employment, and community services. It aims to provide a seamless ecosystem where citizens can buy, sell, manage money, find work, and engage with their communities.",
        "The platform is built with a focus on accessibility, performance, and usability, leveraging modern technologies like Next.js, React Native, and Firebase to ensure smooth web and mobile experiences. Data privacy and user trust are central, with secure authentication, encrypted storage, and user-controlled settings.",
        "Yalegn is modular and scalable, enabling future expansion into additional services such as healthcare, government services, and AI-powered recommendations. By uniting multiple essential services under one platform, Yalegn empowers Ethiopians to navigate daily life more efficiently and connect with resources that improve quality of life.",
      ],
      bullets: [
        "An all-in-one Ethiopian platform addressing marketplace, finance, jobs, and community needs.",
        "Provides a local marketplace connecting buyers and sellers with secure transactions.",
        "Tracks daily financial activities, currency flows, and micro-loans for individuals and businesses.",
        "Connects job seekers with employers and freelance opportunities within Ethiopia.",
        "Supports community services, local events, announcements, and engagement.",
        "Built with modern web and mobile technologies for high performance and accessibility.",
        "Designed with privacy, security, and user control as core principles.",
        "Modular and scalable for future expansion into healthcare, government, and AI services.",
      ],
    },
  },
  {
    id: "finflow",
    companyName: "FinFlow",
    type: "Personal",
    category: ["Finance", "Trading Dashboard", "Productivity", "Analytics"],
    shortDescription:
      "FinFlow is an all-in-one trading and financial management platform designed to provide real-time market insights, portfolio tracking, and advanced analytics for traders and investors. Currently under active development.",
    websiteLink: "https://github.com/Yordanos7/FinFlow-OS",
    techStack: [
      "React",
      "Vite",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
      "React Query",
      "React-Window",
    ],
    startDate: new Date("2025-05-01"),
    endDate: null,
    companyLogoImg: "/projects/finflow/logo.png",
    pagesInfoArr: [
      {
        title: "Trading Dashboard",
        description:
          "A sleek and interactive dashboard that visualizes real-time market data, price movements, and portfolio performance, allowing traders to make informed decisions quickly.",
        imgArr: [
          "/projects/finflow/dashboard_1.webp",
          "/projects/finflow/dashboard_2.webp",
        ],
      },
      {
        title: "Portfolio & Risk Analytics",
        description:
          "Tracks user portfolios, calculates risk exposure, monitors asset allocation, and provides actionable insights for better financial decision-making.",
        imgArr: [
          "/projects/finflow/portfolio_1.webp",
          "/projects/finflow/portfolio_2.webp",
        ],
      },
      {
        title: "Real-Time Market Integration",
        description:
          "Integrates live market feeds, price charts, and alerts to ensure users are always updated with the latest financial data.",
        imgArr: ["/projects/finflow/market_1.webp"],
      },
      {
        title: "Productivity & Workflow Tools",
        description:
          "Includes features like trading journals, strategy notes, task management, and analytics exports to enhance trader productivity and organization.",
        imgArr: [
          "/projects/finflow/workflow_1.webp",
          "/projects/finflow/workflow_2.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "FinFlow is a next-generation trading and financial platform built to empower traders and investors with real-time data, analytics, and workflow tools. It combines market intelligence with portfolio tracking to create a single, seamless interface for managing investments.",
        "Currently under active development, FinFlow leverages modern technologies like React, Vite, and Tailwind CSS for the frontend, and Node.js, Express, Prisma, and PostgreSQL for the backend. Real-time market data is integrated using WebSockets via Socket.IO, ensuring users have instant access to price movements and alerts.",
        "The platform is designed with performance, usability, and scalability in mind. Advanced features such as portfolio analytics, risk assessment, and productivity tools like trading journals provide a comprehensive environment for both novice and professional traders. The GitHub repository contains the live codebase, open for review, contribution, or personal exploration.",
      ],
      bullets: [
        "All-in-one trading and portfolio management platform in active development.",
        "Interactive dashboard with real-time market data, charts, and alerts.",
        "Portfolio tracking with risk analysis and asset allocation insights.",
        "Built with React, Vite, TypeScript, Tailwind CSS, Node.js, Express, and PostgreSQL.",
        "Real-time data integration using Socket.IO for instant market updates.",
        "Productivity features like trading journals, strategy notes, and analytics exports.",
        "Scalable architecture ready to expand with additional financial instruments and integrations.",
        "GitHub repository available for developers: https://github.com/Yordanos7/FinFlow-OS",
      ],
    },
  },
  {
    id: "rsa_encryption_chatapp",
    companyName: "RSA Encryption ChatApp",
    type: "Personal",
    category: ["Real-Time Chat", "Encryption", "Security", "Web App"],
    shortDescription:
      "A secure real-time messaging platform that uses RSA encryption to protect messages end-to-end, ensuring that conversations remain private and tamper-proof.",
    websiteLink: "https://github.com/Yordanos7/RSA_Encryption_ChatApp",
    techStack: [
      "React",
      "Vite",
      "Typescript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "RSA Encryption",
      "LocalStorage / IndexedDB",
    ],
    startDate: new Date("2025-05-20"),
    endDate: new Date("2025-08-01"),
    companyLogoImg: "/projects/rsa_chatapp/logo.png",
    pagesInfoArr: [
      {
        title: "Real-Time Encrypted Messaging",
        description:
          "Experience instantaneous communication where every message is secured with client-side RSA encryption. The interface ensures that only you and your recipient can read the conversation.",
        imgArr: ["/projects/rsa_chatapp/chat_1.webp"],
      },
      {
        title: "Advanced RSA Key Management",
        description:
          "A transparent look into the cryptographic engine. Users manage their unique public and private key pairs locally, maintaining complete control over their digital security.",
        imgArr: ["/projects/rsa_chatapp/keys_1.webp"],
      },
      {
        title: "Modern & Secure UI",
        description:
          "A clean, responsive interface designed for privacy. Features include real-time status indicators and secure conversation threading for a fluid messaging experience.",
        imgArr: ["/projects/rsa_chatapp/ui_1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "RSA Encryption ChatApp is a cutting-edge messaging platform engineered for uncompromising privacy. Built with a focus on end-to-end security, it utilizes the RSA-2048 cryptographic standard to ensure that every message remains strictly between the sender and the recipient, completely inaccessible to any intermediary or server.",
        "The application demonstrates a sophisticated integration of real-time systems and client-side cryptography. By leveraging React and Vite for a high-performance frontend, combined with Node.js and Socket.IO for seamless duplex communication, users experience snappy messaging without sacrificing security. RSA key pairs are generated directly in the browser, with private keys never leaving the user's local storage—a design choice that prioritizes decentralization and user agency.",
        "Beyond its security core, the app features a sleek, developer-centric UI built with Tailwind CSS. It includes real-time presence tracking, intuitive key management interfaces, and persistent conversation history via IndexedDB. This project serves as a comprehensive demonstration of full-stack engineering, cryptographic implementation, and the principles of Privacy by Design.",
      ],
      bullets: [
        "Architecture focused on end-to-end security using RSA-2048 bit encryption.",
        "Client-side key generation and local storage for maximum private key protection.",
        "Bi-directional real-time communication powered by Socket.IO and Node.js.",
        "Robust tech stack featuring React, TypeScript, and Vite for optimal performance.",
        "Persistent, secure message history utilizing LocalStorage and IndexedDB.",
        "Modern, responsive interface with online status tracking and instant notifications.",
        "A benchmark for secure, private communication platforms in a portfolio context.",
        "Open-source and available for review: https://github.com/Yordanos7/RSA_Encryption_ChatApp",
      ],
    },
  },
  {
    id: "cirql-dashboard",
    companyName: "Cirql Dashboard",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Created a dashboard project using React and Tailwind CSS, focusing on UI design and routing implementation.",
    websiteLink: "https://cirql-ui.namanbarkiya.xyz/",
    techStack: ["React", "Tailwind CSS", "Google Auth"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/cirql/logo.png",
    pagesInfoArr: [
      {
        title: "Dashboard Home",
        description:
          "Main dashboard view with analytics widgets and data visualization",
        imgArr: ["/projects/cirql/web_1.png", "/projects/cirql/web_2.png"],
      },
      {
        title: "Profile Page",
        description:
          "User profile management interface with customization options",
        imgArr: ["/projects/cirql/web_3.png", "/projects/cirql/web_4.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "For the 'Cirql Dashboard' personal, I aimed to enhance my UI design skills and deepen my understanding of routing within a React application.",
        "I utilized React and Tailwind CSS to craft an intuitive dashboard interface that provides users with an organized overview of data and functionalities. The UI components were thoughtfully designed to ensure a seamless user experience.",
        "Incorporating Google Sign-In Authentication further fortified the project by adding a layer of security and convenience. Users are required to authenticate before accessing certain routes, ensuring the safety of sensitive information.",
        "The routing system was meticulously implemented to enable smooth navigation between different sections of the dashboard, simulating real-world use cases.",
        "Through this project, I've gained valuable insights into UI/UX design principles and the implementation of secure and efficient routing in React applications.",
      ],
      bullets: [
        "Created a user-friendly dashboard project using React and Tailwind CSS.",
        "Implemented Google Sign-In Authentication to ensure secure access to sensitive routes.",
        "Designed UI components to provide an intuitive and visually pleasing experience.",
        "Focused on implementing a smooth routing system to simulate real-world use cases.",
        "Enhanced my skills in UI design, routing, and component architecture.",
      ],
    },
  },
  {
    id: "inscript-hindi-typing",
    companyName: "Inscript Hindi Typing",
    type: "Personal",
    category: ["Web Dev", "UI/UX"],
    shortDescription:
      "Developed a user-friendly website for Inscript Hindi typing, addressing the need for a simple tool for Hindi writers to convey data digitally.",
    websiteLink: "https://hindityping.namanbarkiya.xyz",
    githubLink: "https://github.com/namanbarkiya/inscript-hindi-keyboard",
    techStack: ["HTML 5", "CSS 3", "Javascript"],
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-06-15"),
    companyLogoImg: "/projects/hindi-keyboard/logo.png",
    pagesInfoArr: [
      {
        title: "Typing Interface",
        description: "Minimal and user-friendly Inscript Hindi typing area",
        imgArr: ["/projects/hindi-keyboard/web_1.png"],
      },
      {
        title: "Copy and Download the file",
        description:
          "Export functionality allowing users to copy text or download as a document file",
        imgArr: [
          "/projects/hindi-keyboard/web_2.png",
          "/projects/hindi-keyboard/web_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The 'Inscript Hindi Typing Website' project emerged from the need to provide a simple and accessible tool for Hindi writers, especially those in digital news and media, who wished to convey data in Hindi.",
        "Recognizing the challenges posed by complex software in the market, I set out to create a minimalistic typing area that catered to the needs of a vast community of Hindi typists in India.",
        "The project was designed to address the specific requirements of users familiar with the Inscript keyboard layout, mapping English and Hindi alphabets for seamless typing. The intuitive interface allowed users to effortlessly switch between languages, streamlining the process of content creation.",
        "Leveraging HTML and CSS, I crafted the website's UI to ensure a user-friendly experience. Additionally, Local Storage was utilized to enable users to save and retrieve their work, enhancing convenience and productivity.",
        "The website's focus on user experience and simplicity proved to be a key factor in its popularity among Hindi writers. By offering a tool that reduced the barriers to entry, I contributed to the digital empowerment of Hindi typists who previously faced challenges in conveying their message effectively.",
        "This project marked one of my initial forays into web development and highlighted the transformative potential of technology in addressing real-world challenges.",
      ],
      bullets: [
        "Developed a user-friendly website for Inscript Hindi typing.",
        "Catered to the needs of Hindi writers in digital news and media.",
        "Created a minimalistic and intuitive typing interface for the Inscript keyboard layout.",
        "Mapped English and Hindi alphabets to provide a seamless typing experience.",
        "Utilized HTML and CSS to design a user-friendly UI.",
        "Implemented Local Storage to enable users to save and retrieve their work.",
        "Contributed to the digital empowerment of Hindi typists by offering a simple tool.",
        "Marked one of my first web development projects, showcasing technology's potential for addressing real-world needs.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
