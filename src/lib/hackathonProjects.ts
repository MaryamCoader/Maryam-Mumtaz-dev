export interface HackathonProject {
    id: string;
    title: string;
    shortDescription: string;
    challenge: string;
    builtDetails: string;
    techStack: string[];
    features: string[];
    achievements: string;
    image: string;
    links: {
        github: string;
        live: string;
    };
    color: string;
}

export const hackathonProjects: HackathonProject[] = [
    {
        id: "physical-ai",
        title: "Hackathon I: Physical AI Textbook",
        shortDescription: "An AI-native textbook platform for teaching Physical AI & Humanoid Robotics, featuring integrated RAG assistance.",
        challenge: "Create a technical textbook using the AI/Spec-Driven Book Creation pattern with Docusaurus, and build an integrated RAG chatbot to answer context-aware questions.",
        builtDetails: "Developed a comprehensive textbook portal. Integrated a RAG chatbot using OpenAI Agents and ChatKit SDKs, with a backend powered by FastAPI, Neon Postgres, and Qdrant Cloud for vector search.",
        techStack: ["Docusaurus", "Claude Code", "Spec-Kit Plus", "OpenAI Agents", "FastAPI", "Neon Postgres", "Qdrant Cloud", "Better Auth"],
        features: [
            "AI/Spec-Driven autonomous book authoring",
            "Context-aware RAG Chatbot for student support",
            "Personalized learning paths via user background analysis",
            "One-click content translation to Urdu",
            "Reusable Intelligence using Claude Code Subagents"
        ],
        achievements: "Built a pioneer platform for AI-native education, enabling personalized technical learning and automated content translation for diverse students.",
        image: "/images/physical Ai.png",
        links: {
            github: "https://github.com/MaryamMumtaz-piaic",
            live: "https://ai-native-book-iota.vercel.app/"
        },
        color: "from-orange-500 to-red-600"
    },
    {
        id: "todo-app",
        title: "Hackathon II: Evolution of Todo",
        shortDescription: "A transformation from a simple CLI tool to a distributed, AI-powered cloud-native system on Kubernetes.",
        challenge: "Master Spec-Driven Development (SDD) by building a Todo application iteratively through 5 phases, culminating in a Kubernetes-managed AI system.",
        builtDetails: "Acted as Product Architect to evolve a Python console app into a multi-user web app with an AI chatbot manager using OpenAI Agents and MCP (Model Context Protocol).",
        techStack: ["Next.js", "FastAPI", "SQLModel", "OpenAI Agents SDK", "MCP", "Docker", "Kubernetes", "Kafka", "Dapr"],
        features: [
            "Natural Language task management via intelligent agents",
            "Spec-Driven workflow (no manual boilerplate coding)",
            "Distributed architecture using Kafka for messaging",
            "Secure JWT authentication with Better Auth",
            "Automated K8s deployment on DigitalOcean (DOKS)"
        ],
        achievements: "Successfully implemented the 'Architecture of Intelligence' without writing manual boilerplate, mastering modern AIOps and distributed systems.",
        image: "/images/Todo-app.png",
        links: {
            github: "https://github.com/MaryamMumtaz-piaic",
            live: "https://todo-app-sigma-hazel-46.vercel.app/"
        },
        color: "from-cyan-500 to-teal-500"
    },
    {
        id: "learnflow",
        title: "Hackathon III: Learnflow AI Platform",
        shortDescription: "A production-grade AI tutoring platform built with Reusable Intelligence and Cloud-Native agentic infrastructure.",
        challenge: "Shift from syntax writer to system architect by teaching AI agents how to build sophisticated cloud-native applications using 'Skills' with MCP Code Execution.",
        builtDetails: "Constructed 'LearnFlow', a Python tutoring portal. Built a library of reusable agent 'Skills' that allow Claude Code and Goose to autonomously manage the entire stack.",
        techStack: ["Next.js + Monaco", "FastAPI", "Dapr", "Kafka on K8s", "Argo CD", "Kong Gateway", "MCP Code Execution", "Goose"],
        features: [
            "Reusable 'Skills' library for agent autonomy",
            "Token-efficient MCP Code Execution pattern",
            "Multi-agent tutoring orchestration (Triage, Concepts, Debug)",
            "Struggle detection triggers and automated mastery tracking",
            "GitOps delivery using Argo CD and GitHub Actions"
        ],
        achievements: "Achieved 90%+ token reduction using advanced execution patterns and established a library of portable AI skills for autonomous infrastructure.",
        image: "/images/learnflow-app.PNG",
        links: {
            github: "https://github.com/MaryamMumtaz-piaic",
            live: "https://frontend-rho-seven-ssq2gwtp54.vercel.app/"
        },
        color: "from-purple-600 to-blue-600"
    }
];
