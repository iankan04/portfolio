import { cornell } from "../assets/images";
import {
    map,
    contact,
    java,
    css,
    git,
    github,
    python,
    html,
    javascript,
    linkedin,
    react,
    selenium,
    tailwindcss,
    keyboard,
    typescript,
    ocaml,
    c,
    mysql,
    cv,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: ocaml,
        name: "OCaml",
        type: "Backend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Research Intern",
        company_name: "SC Johnson College of Business Emerging Markets Institute",
        icon: cornell,
        iconBg: "#f6d1d1",
        date: "June 2024 - July 2024",
        points: [
            "Summarized important economic policies and trends in emerging market economies from M&A and stock exchanges data for the annual Emerging Market Multinationals Report",
            "Conducted data collection through CapitalIQ, SDC Platinum on Refinitiv Workspace, and the World Federation of Exchanges", 
            "Analyzed and processed financial and market data for presentations on investment strategies",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: cv,
        theme: 'btn-back-red',
        name: 'CV Builder',
        description: 'Designed and implemented a resume builder website that dynamically generates CVs based on user-provided data.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: selenium,
        theme: 'btn-back-pink',
        name: 'Web-Scraping Bot for Sports Betting Optimization',
        description: 'Developed an automated web-scraping bot to collect daily prop data from PrizePicks and analyzed collected data to optimize betting odds',
        link: 'https://github.com/iankan04/Webscraping-Bot-for-Sports-Betting-Optimization',
    },
    {
        iconUrl: keyboard,
        theme: 'btn-back-green',
        name: 'OCamlType',
        description: 'Collaborated in a cross-functional team to create a typing test simulator featuring multiple game modes and dynamic text generation',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: map,
        theme: 'btn-back-blue',
        name: 'Maze-Traversing Algorithm',
        description: "Implemented Dijkstra's algorithm and recursive DFS in Java to find the fastest route through a weighted digraph",
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
];