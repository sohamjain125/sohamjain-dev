// Portfolio Data Configuration
// This file contains all the data for the portfolio website
// Update this file to easily modify content without touching components

export const personalInfo = {
  name: "Soham Jain",
  role: "Full Stack Developer",
  email: "sohamjain125@gmail.com",
  phone: "+91 90220 70326",
  location: "Thane, India",
  linkedin: "https://linkedin.com/in/soham-jain-36a134244",
  github: "https://github.com/sohamjain125",
  description: "Passionate about creating innovative web solutions with modern technologies. Specialized in React, Node.js, and full-stack development with a focus on user experience and performance."
};

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Medi-Caps University, Indore",
    period: "2021–2025",
    details: "CGPA: 8.34"
  },
  {
    degree: "HSC",
    institution: "KJ Somaiya Junior College, Mumbai",
    period: "2021",
    details: "95.66%"
  }
];

export const skills = [
  { name: "C++", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "React", level: 90 },
  { name: "Angular", level: 75 },
  { name: "Next.js", level: 80 },
  { name: "Bootstrap", level: 85 },
  { name: "Material UI", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MsSQL", level: 70 },
  { name: "Redux", level: 80 },
  { name: "CASL", level: 70 },
  { name: "React Query", level: 75 },
  { name: "Appwrite", level: 70 },
  { name: "Git", level: 85 },
  { name: "Postman", level: 80 },
  { name: "Agile", level: 75 },
  { name: "SDLC", level: 80 },
  { name: "Cursor AI", level: 85 },
  { name: "GitHub Copilot", level: 80 },
  { name: "ChatGPT", level: 90 },
  { name: "VS Code", level: 95 },
  { name: "Figma", level: 70 },
  { name: "Docker", level: 65 },
  { name: "AWS", level: 70 },
  { name: "Vercel", level: 85 },
  { name: "Netlify", level: 80 }
];

export const experience = [
  {
    company: "Codemines Solutions Pvt Ltd",
    position: "Software Engineer Intern",
    period: "Jan 2025 – Jul 2025",
    location: "Remote",
    achievements: [
      "Integrated 15+ REST APIs for PermAssist (internal platform) increasing data exchange efficiency by 30%.",
      "Developed AI chatbot UI integrated with Amazon Lex, automating 60% of support."
    ],
    technologies: ["React", "Node.js", "REST APIs", "Amazon Lex", "AWS"]
  },
  {
    company: "Tata Consultancy Services",
    position: "Project Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Mumbai, India",
    achievements: [
      "Developed 20+ REST APIs for AGM and IEPF projects (Node.js), improved backend efficiency by 40%.",
      "Designed Angular frontends with <2s load time and 30% boost in user retention."
    ],
    technologies: ["Angular", "Node.js", "REST APIs", "TypeScript", "Express.js"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Katchit Admin Panel",
    description: "Freelance project for food & event management platform. Comprehensive admin dashboard with user management, order tracking, and analytics.",
    image: "/images/katchit.png",
    liveUrl: "https://admin.katchit.in/",
    githubUrl: null,
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "Freelance",
    date: "2024"
  },
  {
    id: 2,
    title: "Katchit Vendor Panel",
    description: "Vendor management system for the Katchit platform. Allows vendors to manage orders, menus, and business operations.",
    image: "/images/katchit.png",
    liveUrl: "https://vendor.katchit.in/signin",
    githubUrl: null,
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "Freelance",
    date: "2024"
  },
  {
    id: 3,
    title: "Shiv Joyti NGO Website",
    description: "Informational website built for a local NGO. Features donation system, event updates, and volunteer registration.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=400&fit=crop&crop=center&auto=format&q=80",
    liveUrl: "https://shiv-joyti.vercel.app/",
    githubUrl: "https://github.com/sohamjain125/shiv-joyti",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    category: "Freelance",
    date: "2024"
  },
  {
    id: 4,
    title: "CodeBuddy",
    description: "Freelance full-stack platform for real-time collaborative coding using Next.js, Appwrite, and REST APIs.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&crop=center&auto=format&q=80",
    liveUrl: "https://codie-buddy.vercel.app/",
    githubUrl: "https://github.com/sohamjain125/codebuddy",
    technologies: ["Next.js", "Appwrite", "REST APIs", "Real-time"],
    category: "Freelance",
    date: "2024"
  },
  {
    id: 5,
    title: "PermAssist",
    description: "Internal Codemines tool for config editing, versioning, and JSON management with modern UI principles.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=center&auto=format&q=80",
    liveUrl: null,
    githubUrl: null,
    technologies: ["React", "Node.js", "REST APIs", "AWS"],
    category: "Professional",
    date: "2025"
  },
  {
    id: 6,
    title: "AGM Project (TCS)",
    description: "Angular-based dashboard and RESTful API integration for Annual General Meeting operations.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop&crop=center&auto=format&q=80",
    liveUrl: null,
    githubUrl: null,
    technologies: ["Angular", "Node.js", "REST APIs", "TypeScript"],
    category: "Professional",
    date: "2024"
  }
];

export const certificates = [
  "Smart India Hackathon – TCS",
  "Young Turks by Naukri"
];

export const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Add new sections or modify existing ones here
export const additionalSections = {
  testimonials: [], // Add testimonials here if needed
  blog: [], // Add blog posts here if needed
  achievements: [], // Add achievements here if needed
};

// Configuration for easy customization
export const config = {
  theme: {
    primaryColor: "#3B82F6", // Blue
    secondaryColor: "#8B5CF6", // Purple
    accentColor: "#10B981", // Green
  },
  animations: {
    enabled: true,
    duration: 0.8,
  },
  contact: {
    formEnabled: true,
    emailService: "mailto", // or "formspree", "netlify", etc.
  }
}; 