export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "SACCO Credit Intelligence & Ingestion",
    contibutionDescription:
      "Core engineering collaboration with Amani Solutions as Dev Team Lead. Architected and implemented high-throughput Sage 50 financial data ingestion engines and backend services powering Ethiopia's nationwide SACCO credit intelligence platform serving 8M+ members.",
    repoOwner: "Amani-Solutions",
    link: "https://github.com/Amani-Solutions",
  },
  {
    repo: "Nova-HMS & CollegeERP Platforms",
    contibutionDescription:
      "Active organization collaboration with Nova Technologies PLC. Contributed to engineering core modules of Nova-HMS (clinical hospital management & EMR) and CollegeERP (integrated campus academic, student, and finance management).",
    repoOwner: "Nova-Technologies-P-L-C",
    link: "https://github.com/Nova-Technologies-P-L-C",
  },
  {
    repo: "Browsemind Chrome Extension",
    contibutionDescription:
      "Built and open-sourced Browsemind, an intelligent Chrome extension (Manifest V3) that tracks and analyzes user browsing behavior, productivity patterns, and active usage trends with local encryption, performance optimization, and privacy preservation.",
    repoOwner: "Yordanos7",
    link: "https://github.com/Yordanos7/Browsemind_chrome_extension",
  },
  {
    repo: "Edge-Trade Quantitative Strategy Journal",
    contibutionDescription:
      "Full-stack trading journal and analytical engine designed for algorithmic and discretionary traders to audit execution discipline, track R-multiples, evaluate trade statistics, and monitor risk metrics.",
    repoOwner: "Yordanos7",
    link: "https://github.com/Yordanos7/edge-trade",
  },
  {
    repo: "RSA Encryption Real-Time Chat Application",
    contibutionDescription:
      "High-security encrypted instant messaging platform featuring client-side RSA key generation, digital signature verification, real-time Socket.io websockets, and zero plaintext exposure.",
    repoOwner: "Yordanos7",
    link: "https://github.com/Yordanos7/RSA_Encryption_ChatApp",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
