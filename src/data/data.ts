// src/data/data.ts

interface Stat {
  years: number;
  projects: number;
  clients: number;
}

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface Portfolio {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
}

// interface Testimonial {
//   quote: string;
//   name: string;
//   title: string;
//   photo: string;
// }

interface Social {
  linkedin: string;
  github: string;
  instagram: string;
}

interface PersonalData {
  name: string;
  title: string;
  heroTagline: string;
  profileImage: string;
  about: string;
  stats: Stat;
  softSkills: string[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  portfolio: Portfolio[];
  // testimonials: Testimonial[];
  social: Social;
  footerTagline: string;
}

export const personalData: PersonalData = {
  name: "Ananggi Widian",
  title: "Web Developer and AI Enginer",
  heroTagline: "Merancang web yang elegan, melatih AI yang bermakna",
  profileImage: "/images/profile.jpg",
  about: "I'm a Web Developer and AI Engineer with a genuine passion for growth. I don't just build products, I constantly push my skills forward, staying at the edge of what's possible in web technology and artificial intelligence. Every project is a chance to learn something new and deliver something better.",
  stats: {
    years: 2,
    projects: 12,
    clients: 4,
  },
  softSkills: ["Kolaborasi", "Riset", "Komunikasi", "Detail-Orientasi"],
  skills: [
    { name: "Frontend",      level: 90 },
    { name: "Backend",       level: 70 },
    { name: "UI/UX Design",  level: 85 },
    { name: "Motion Design", level: 60 },
  ],
  experience: [
  {
    position: "Bootcamp Student — Web Development",
    company: "Harisenin.com",
    period: "2025",
    description: "Completed an intensive web development bootcamp covering modern frontend and backend technologies. Built real-world projects and collaborated with peers in a professional learning environment.",
  },
  {
    position: "Self-Taught AI & Web Developer",
    company: "Independent Learning",
    period: "2024 - Sekarang",
    description: "Continuously expanding skills through online courses, hands-on personal projects, and staying up to date with the latest advancements in web development and artificial intelligence.",
  },
],
  education: [
  {
    degree: "Information Systems",
    institution: "Universitas Terbuka (Open University)",
    year: "2023 - Present",
  },
  {
    degree: "Japanese Language & Culture",
    institution: "Human Academy Osaka, Japan",
    year: "2022 - 2024",
  },
  {
    degree: "Mathematics Education (2018 - 2022)",
    institution: "University of Lampung (UNILA)",
    year: "Did Not Complete",
  },
],
  portfolio: [
    // {
    //   title: "Elysian Lookbook",
    //   description: "Website lookbook interaktif untuk brand fashion dengan transisi halus.",
    //   image: "/images/portfolio1.jpg",
    //   tags: ["React", "GSAP", "Tailwind"],
    //   demo: "https://demo.com",
    //   github: "https://github.com/",
    // },
    // {
    //   title: "ArchiViz Gallery",
    //   description: "Galeri portofolio arsitektur dengan visualisasi 3D ringan.",
    //   image: "/images/portfolio2.jpg",
    //   tags: ["Three.js", "Next.js", "SCSS"],
    //   demo: "https://demo.com",
    //   github: "https://github.com/",
    // },
    // {
    //   title: "Motion Brand",
    //   description: "Microsite interaktif untuk kampanye brand dengan animasi scroll.",
    //   image: "/images/portfolio3.jpg",
    //   tags: ["Framer Motion", "Vue", "GSAP"],
    //   demo: "https://demo.com",
    //   github: "https://github.com/",
    // },
  ],
  // testimonials: [
  //   {
  //     quote: "Bekerja dengan Alessandra adalah pengalaman luar biasa. Detail dan estetikanya sangat tajam.",
  //     name: "James P.",
  //     title: "Creative Director, Studio Luxe",
  //     photo: "/images/client1.jpg",
  //   },
  //   {
  //     quote: "Kode yang bersih dan desain yang memukau. Dia mengerti betul kebutuhan brand premium.",
  //     name: "Maya S.",
  //     title: "Founder, Noir Agency",
  //     photo: "/images/client2.jpg",
  //   },
  // ],
  social: {
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    instagram: "https://instagram.com/",
  },
  footerTagline: "Building the future with machine intelligence.",
};
