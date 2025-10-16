import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaAngular,
    FaBootstrap,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaGoogle,
    FaDatabase,
    FaFigma,
    FaMicrosoft,
    FaServer,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiTypescript,
    SiJquery,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiFirebase,
    SiSocketdotio,
    SiJira,
    SiPostman,
    SiOpenai,
    SiMaterialdesign,
    SiKnexdotjs,
} from "react-icons/si";

import {
    IoIosApps,
    IoMdCodeWorking,
    IoMdConstruct,
    IoIosDocument,
} from "react-icons/io";

export const skills = [
    // 🌐 Frontend
    { name: "HTML", icon: FaHtml5, color: "#E34F26", category: "frontend" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6", category: "frontend" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "frontend" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "frontend" },
    { name: "jQuery", icon: SiJquery, color: "#0769AD", category: "frontend" },
    { name: "React", icon: FaReact, color: "#61DAFB", category: "frontend" },
    { name: "React Native", icon: FaReact, color: "#5CCFEE", category: "frontend" },
    { name: "Angular", icon: FaAngular, color: "#DD0031", category: "frontend" },
    { name: "Ionic", icon: IoIosApps, color: "#3880FF", category: "frontend" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", category: "frontend" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3", category: "frontend" },
    { name: "Material UI", icon: SiMaterialdesign, color: "#007FFF", category: "frontend" },

    // ⚙️ Backend
    { name: "Node.js", icon: FaNodeJs, color: "#3C873A", category: "backend" },
    { name: "Express", icon: SiExpress, color: "#000000", category: "backend" },
    { name: "REST APIs", icon: IoMdCodeWorking, color: "#6366F1", category: "backend" },
    { name: "EJS", icon: IoIosDocument, color: "#6366F1", category: "backend" },
    { name: "SSR", icon: FaServer, color: "#F59E0B", category: "backend" },
    { name: "SQL", icon: FaDatabase, color: "#003B57", category: "backend" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "backend" },
    { name: "MongoDB", icon: SiMongodb, color: "#4EA94B", category: "backend" },
    { name: "Redis", icon: SiRedis, color: "#DC382D", category: "backend" },
    { name: "Knex.js", icon: SiKnexdotjs, color: "#D97706", category: "backend" },
    { name: "AWS", icon: FaAws, color: "#FF9900", category: "backend" },
    { name: "Mongoose", icon: IoMdConstruct, color: "#6B7280", category: "backend" },
    { name: "Socket.io", icon: SiSocketdotio, color: "#000000", category: "backend" },
    { name: "Docker", icon: FaDocker, color: "#0DB7ED", category: "backend" },

    // 🔧 Other
    { name: "AI", icon: SiOpenai, color: "#22D3EE", category: "other" },
    { name: "Firebase", icon: SiFirebase, color: "#FFA611", category: "other" },
    { name: "Google Auth", icon: FaGoogle, color: "#DB4437", category: "other" },
    { name: "Git", icon: FaGitAlt, color: "#F05032", category: "other" },
    { name: "Figma", icon: FaFigma, color: "#A259FF", category: "other" },
    { name: "MS Office", icon: FaMicrosoft, color: "#2563EB", category: "other" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "other" },
    { name: "Jira / Confluence", icon: SiJira, color: "#2684FF", category: "other" },
];
