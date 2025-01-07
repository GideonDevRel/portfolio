export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
};

export type Blog = {
  title: string;
  description: string;
  link: string;
  datePublished: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "OptiFI DeFi Dashboard",
    description: "A sleek DeFi dashboard for portfolio aggregation and gas fee optimization.",
    techStack: ["Next.js", "Tailwind CSS", "Zustand", "Web3.js", "Node.js", "The Graph"],
    githubLink: "https://github.com/username/optifi-defi-dashboard",
    liveLink: "https://optifi-defi.vercel.app",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Ethereum USSD Prototype",
    description:
      "A USSD application that enables users to receive, send, and pay for goods and services with Ethereum.",
    techStack: ["Go", "GETH", "Africa's Talking"],
    githubLink: "https://github.com/username/ethereum-ussd-prototype",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "ENS Domain Search",
    description:
      "An app to search and register Ethereum Name Service (ENS) domains using Sepolia ETH.",
    techStack: ["Vite", "React", "Web3.js"],
    githubLink: "https://github.com/username/ens-domain-search",
    liveLink: "https://ens-search.vercel.app",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "EthUSSD",
    description:
      "A USSD application that enables users to receive, send, and pay for goods and services with Ethereum.",
    techStack: ["Go", "GETH", "Africa's Talking"],
    githubLink: "https://github.com/username/eth-ussd",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "ENS Lookup",
    description:
      "Check if a user has registered a .eth domain and display their associated wallet address.",
    techStack: ["Next.js", "web3.js (namespace plugin)"],
    githubLink: "https://github.com/username/ens-lookup",
    liveLink: "https://ens-lookup.vercel.app",
    image: "/placeholder.svg?height=300&width=600",
  },
];

export const blogs: Blog[] = [
  {
    title: "Introduction to web3.js Plugins",
    description: "Learn how to enhance your dApp development using web3.js plugins.",
    link: "https://web3js.org/blog/web3-plugins",
    datePublished: "2024-09-22",
    tags: ["web3.js", "Ethereum", "Plugins"],
  },
  {
    title: "USSD on Ethereum: A Revolutionary Approach",
    description: "Exploring the potential of USSD for blockchain adoption in Africa.",
    link: "https://example.com/blog/ussd-ethereum",
    datePublished: "2024-09-27",
    tags: ["Ethereum", "USSD", "Blockchain"],
  },
  {
    title: "Optimizing DeFi Transactions with Multicall",
    description: "A guide to using multicall for efficient DeFi portfolio aggregation.",
    link: "https://example.com/blog/defi-multicall",
    datePublished: "2024-09-10",
    tags: ["DeFi", "Multicall", "Web3.js"],
  },
];

