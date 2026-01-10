import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Monorepo",
    description:
      "Manage multiple projects within a single repository for better code sharing and consistency.",
    rating: 4,
    icon: Icons.monorepo,
  },
  {
    name: "tRPC",
    description:
      "Build end-to-end typesafe APIs without code generation or runtime overhead.",
    rating: 5,
    icon: Icons.trpc,
  },
  {
    name: "Sass",
    description:
      "Enhance CSS with variables, nested rules, mixins, and more for maintainable styles.",
    rating: 4,
    icon: Icons.sass,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.reactNative,
  },
  {
    name: "REST API",
    description:
      "Design and implement scalable web services using representational state transfer principles.",
    rating: 5,
    icon: Icons.restApi,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "PostgreSQL",
    description:
      "Utilize the world's most advanced open source relational database for reliable data storage.",
    rating: 5,
    icon: Icons.postgresql,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 2,
    icon: Icons.mysql,
  },
  {
    name: "Netlify",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Zustand",
    description:
      "A small, fast, and scalable bearbones state-management solution for React.",
    rating: 5,
    icon: Icons.zustand,
  },
  {
    name: "Zod",
    description:
      "TypeScript-first schema validation with static type inference for robust data handling.",
    rating: 5,
    icon: Icons.zod,
  },
  {
    name: "GSAP",
    description:
      "Create high-performance animations that work in every major browser.",
    rating: 4,
    icon: Icons.gsap,
  },
  {
    name: "Turso",
    description:
      "The edge database based on libSQL, designed for high performance and low latency.",
    rating: 4,
    icon: Icons.turso,
  },
  {
    name: "Firebase",
    description:
      "Build and grow apps people love with a comprehensive app development platform.",
    rating: 5,
    icon: Icons.firebase,
  },
  {
    name: "Java",
    description:
      "Build robust, secure, and scalable high-performance applications with Java.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "Better Auth",
    description:
      "The most comprehensive authentication library for TypeScript, providing secure and flexible auth solutions.",
    rating: 5,
    icon: Icons.betterAuth,
  },
  {
    name: "Clerk",
    description:
      "Modern authentication and user management for the web, enabling secure user sign-in and sign-up.",
    rating: 5,
    icon: Icons.clerk,
  },
  {
    name: "Prisma",
    description:
      "Next-generation ORM for Node.js and TypeScript, making database access easy and type-safe.",
    rating: 5,
    icon: Icons.prisma,
  },
  {
    name: "Postman",
    description:
      "Comprehensive platform for API testing, automation, and development, ensuring API reliability.",
    rating: 4,
    icon: Icons.postman,
  },
  {
    name: "Swagger",
    description:
      "Standard for API documentation and design, providing interactive and human-readable API specs.",
    rating: 4,
    icon: Icons.swagger,
  },
  {
    name: "OpenAI",
    description:
      "Integrate powerful AI models into applications for natural language processing and creative tasks.",
    rating: 5,
    icon: Icons.openai,
  },
  {
    name: "RSA Encryption",
    description:
      "Implementation of public-key cryptography for secure end-to-end communication and data protection.",
    rating: 5,
    icon: Icons.rsaEncryption,
  },
  {
    name: "LocalStorage / IndexedDB",
    description:
      "Client-side data storage solutions for persisting user data and application state within the browser.",
    rating: 5,
    icon: Icons["LocalStorage / IndexedDB"],
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
