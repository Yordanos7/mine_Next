import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Yordanos Yohannes's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Yordanos Yohannes's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Yordanos Yohannes's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Yordanos Yohannes.",
    },
  },
  contributions: {
    title: "Collaborations & Open Source",
    description:
      "Active enterprise engineering collaborations, organization contributions, and open-source software.",
    metadata: {
      title: "Collaborations & Open Source",
      description:
        "Yordanos Yohannes's enterprise engineering collaborations, organization repositories, and open-source software.",
    },
  },
  resume: {
    title: "Resume",
    description: "Yordanos Yohannes's resume.",
    metadata: {
      title: "Resume",
      description: "Yordanos Yohannes's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Yordanos Yohannes's professional journey and experience timeline.",
    },
  },
};
