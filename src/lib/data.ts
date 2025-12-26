import { Github, Linkedin, Facebook, Database, BrainCircuit, Code, Settings, Brush, Cpu, LineChart } from "lucide-react";
import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "Sales Forecasting Application",
    description: "A dynamic web-based application that monitors real-time sales data and predicts sales trends for the next six months using JavaScript and TensorFlow.js with ML predictions.",
    image: "project-1",
    tags: ["JavaScript", "TensorFlow.js", "ML"],
    link: "https://github.com/acyklyne/Sales_Forecasting_Application.git",
  },
  {
    title: "HerbAI",
    description: "A real-time herbal detection app using Flutter, C++, and YOLOv8 AI, capable of scanning plants and retrieving detailed medicinal data.",
    image: "project-2",
    tags: ["Flutter", "C++", "YOLOv8", "AI"],
    link: "https://github.com/EzekielleGambong/herbai.git",
  },
  {
    title: "CakeCraft",
    description: "A web platform for designing custom cakes, empowering small bakeries. Built with ReactJS, Tailwind CSS, Laravel, and MySQL.",
    image: "project-3",
    tags: ["ReactJS", "Tailwind CSS", "Laravel", "MySQL"],
    link: "https://github.com/acyklyne/CakeCraft.git",
  },
  {
    title: "Choice Tales",
    description: "A web-based interactive story platform where users shape the narrative through their choices. Built with ReactJS and Tailwind CSS.",
    image: "project-4",
    tags: ["ReactJS", "Tailwind CSS"],
    link: "https://github.com/acyklyne/ChoiceTales.git",
  },
];

export const skills = [
  { name: "JavaScript", icon: Icons.javascript, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Python", icon: Icons.python, url: "https://www.python.org/" },
  { name: "Java", icon: Icons.java, url: "https://www.java.com/" },
  { name: "HTML5", icon: Icons.html, url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { name: "CSS3", icon: Icons.css, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "React", icon: Icons.react, url: "https://react.dev/" },
  { name: "Next.js", icon: Icons.nextjs, url: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: Icons.tailwind, url: "https://tailwindcss.com/" },
  { name: "Firebase", icon: Icons.firebase, url: "https://firebase.google.com/" },
  { name: "Figma", icon: Icons.figma, url: "https://www.figma.com/" },
  { name: "Hardware & Systems", icon: Cpu, url: "#services" },
  { name: "Data Analysis", icon: LineChart, url: "#services" },
];

export const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/acyklyne" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/acy-klyne-aguilar-4764a5319" },
  { name: "Facebook", icon: Facebook, url: "https://web.facebook.com/acy.klyne.b.aguilar" },
];

export const certifications = [
    {
      title: "Introduction to Back-End Development",
      issuer: "Coursera",
      date: "May 2024",
      link: "https://www.coursera.org/account/accomplishments/verify/938YVCU6V848",
      image: "cert-1",
    },
    {
      title: "Freeaman",
      issuer: "Raket.ph",
      date: "May 2024",
      link: "https://www.raket.ph/e-certificate/6620d41aa570a",
      image: "cert-2",
    },
    {
      title: "Udemy Certified",
      issuer: "Udemy",
      date: "May 2024",
      link: "#",
      image: "cert-3",
    },
];

export const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and applications using modern technologies like React, Next.js, and Tailwind CSS.',
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Proficient in MySQL and SQL for robust data querying, validation, and creating insightful reports.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Experience with TensorFlow, computer vision, and leveraging AI APIs for intelligent application features.',
  },
  {
    icon: Brush,
    title: 'UI/UX & Design',
    description: 'Crafting intuitive and visually appealing user interfaces with Figma and other creative tools like Canva and Adobe suite.',
  },
  {
    icon: Settings,
    title: 'Hardware & Systems',
    description: 'Expert in system configuration, troubleshooting, and custom PC building for optimal performance.',
  },
];
