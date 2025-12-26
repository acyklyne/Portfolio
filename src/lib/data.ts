import { Github, Linkedin, Facebook, Database, BrainCircuit, Code, Settings, Brush, Cpu, LineChart } from "lucide-react";
import { Icons } from "@/components/icons";

export const projects = [
  {
    title: "Sales Forecasting Application",
    description:
      "A dynamic web-based application that monitors real-time sales data and predicts sales trends for the next six months using JavaScript and TensorFlow.js with ML predictions.",
    image: "/prev-projects/sales_forecasting_dashboard.png",
    tags: ["JavaScript", "TensorFlow.js", "ML"],
    link: "https://github.com/acyklyne/Sales_Forecasting_Application.git",
  },
  {
    title: "HerbAI",
    description:
      "A real-time herbal detection app using Flutter, C++, and YOLOv8 AI, capable of scanning plants and retrieving detailed medicinal data.",
    image: "/prev-projects/herbai.png",
    tags: ["Flutter", "C++", "YOLOv8", "AI"],
    link: "https://github.com/EzekielleGambong/herbai.git",
  },
  {
    title: "CakeCraft",
    description:
      "A web platform for designing custom cakes, empowering small bakeries. Built with ReactJS, Tailwind CSS, Laravel, and MySQL.",
    image: "/prev-projects/cakecraft.png",
    tags: ["ReactJS", "Tailwind CSS", "Laravel", "MySQL"],
    link: "https://github.com/acyklyne/CakeCraft.git",
  },
  {
    title: "Choice Tales",
    description:
      "A web-based interactive story platform where users shape the narrative through their choices. Built with ReactJS and Tailwind CSS.",
    image: "/prev-projects/choicetales.png",
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
    title: "Installing & Configuring Computer Systems",
    issuer: "TESDA",
    date: "2025",
    pdf: "/certficates/AGUILAR_TESDA_INSTALLING_CONFIGURING_COMPUTER_SYSTEMS.pdf",
    previewImage: "/preview/AGUILAR_TESDA_INSTALLING_CONFIGURING_COMPUTER_SYSTEMS.png",
  },
  {
    title: "C++ Essentials 1",
    issuer: "Cisco",
    date: "2025",
    pdf: "/certficates/CPLUSPLUS_Essentials_1.pdf",
    previewImage: "/preview/CPLUSPLUS_Essentials_1.png",
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "2025",
    pdf: "/certficates/Computer_Hardware_Basics.pdf",
    previewImage: "/preview/Computer_Hardware_Basics.png",
  },
  {
    title: "Intro to Modern AI",
    issuer: "Cisco",
    date: "2025",
    pdf: "/certficates/Intro_to_Modern_AI.pdf",
    previewImage: "/preview/Intro_to_Modern_AI.png",
  },
  {
    title: "AWS Amazon Aurora MySQL Basics",
    issuer: "AWS",
    date: "2024",
    pdf: "/certficates/AWS_Amazon_Aurora_MySQL_Basics.pdf",
    previewImage: "/preview/AWS_Amazon_Aurora_MySQL_Basics.png",
  },
  {
    title: "Fundamentals of Data Analytics 1",
    issuer: "AWS",
    date: "2024",
    pdf: "/certficates/AWS_Skill_Builder_1.pdf",
    previewImage: "/preview/AWS_Skill_Builder_1.png",
  },
  {
    title: "Fundamentals of Data Analytics 2",
    issuer: "AWS",
    date: "2024",
    pdf: "/certficates/AWS_Skill_Builder_2.pdf",
    previewImage: "/preview/AWS_Skill_Builder_2.png",
  },
  {
    title: "Smartrepreneurship 101",
    issuer: "TESDA",
    date: "2023",
    pdf: "/certficates/AGUILAR_TESDA_SMARTREPRENEURSHIP_101.pdf",
    previewImage: "/preview/AGUILAR_TESDA_SMARTREPRENEURSHIP_101.png",
  },
  {
    title: "Intro to CSS",
    issuer: "TESDA",
    date: "2023",
    pdf: "/certficates/AGUILAR_TESDA_INTRO_TO_CSS.pdf",
    previewImage: "/preview/AGUILAR_TESDA_INTRO_TO_CSS.png",
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
