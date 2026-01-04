import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiHtml5, SiCss3, SiGit, SiGithub, SiSpringboot, SiPostman, SiHeroku, SiNetlify, SiTypescript, SiTailwindcss, SiMysql, SiPython, SiNumpy, SiPandas, SiAmazonwebservices, SiAccenture
} from 'react-icons/si';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  companyLink: string;
  date: string;
  description: string[];
}

export interface Skill {
    name: string;
    icon: IconType;
}

export interface Certification {
    name: string;
    issuer: string;
    icon: IconType;
}

export interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
}

export const RESUME_LINK = 'https://drive.google.com/file/d/1_geLkxmtyGtqD5ZlWvqCu9SJTWMvdHup/view?usp=drivesdk';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack MERN Intern',
    company: 'Sanyu Infotech Pvt. Ltd.',
    companyLink: '#',
    date: 'May 2023 - July 2023',
    description: [
      'Developed full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).',
      'Built and tested robust REST APIs using Postman and Thunder Client.',
      'Implemented secure JWT-based authentication and role-based access control.',
      'Worked in an Agile development environment, contributing to daily stand-ups and sprint planning.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Movie Management System',
    description: 'A full-stack movie management platform with Admin and User roles. Admins can manage the database while users can browse and search. Integrated TMDB API and JWT authentication.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    githubLink: 'https://github.com/codewitharjun214/mern-movies-app',
    liveLink: 'https://akmoviesapp.netlify.app/',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'KisanBazaar - Smart Farmer Marketplace',
    description: 'A marketplace connecting farmers directly with consumers. Features secure authentication, product listings, and API integrations for real-world problem solving.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    githubLink: 'https://github.com/codewitharjun214/KisanBazaar-Smart-Farmer-Marketplace',
    liveLink: 'https://github.com/codewitharjun214/KisanBazaar-Smart-Farmer-Marketplace',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'MFitness Gym Website',
    description: 'A highly responsive gym website designed with a focus on premium UI/UX, high performance, and seamless mobile responsiveness.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubLink: 'https://github.com/codewitharjun214',
    liveLink: 'https://github.com/codewitharjun214',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Code Snippet Manager',
    description: 'A professional application for developers to save, organize, and search for their favorite code snippets with syntax highlighting.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind'],
    githubLink: 'https://github.com/codewitharjun214/Code-Snippet-Manager',
    liveLink: 'https://github.com/codewitharjun214/Code-Snippet-Manager',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop',
  },
];

export const CERTIFICATIONS: Certification[] = [
    { name: 'React', issuer: 'Lets Upgrade', icon: SiReact },
    { name: 'MongoDB for Developers', issuer: 'MongoDB University', icon: SiMongodb },
    { name: 'AWS Solution Architecture', issuer: 'AWS Training', icon: SiAmazonwebservices },
    { name: 'Developer Job Simulation', issuer: 'Accenture / Forage', icon: SiAccenture },
];

export const SKILLS: Skill[] = [
    { name: 'React.js', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Java / Spring', icon: SiSpringboot },
    { name: 'MySQL', icon: SiMysql },
    { name: 'HTML5 / CSS3', icon: SiHtml5 },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Git & GitHub', icon: SiGithub },
    { name: 'Postman', icon: SiPostman },
];

export const SOCIAL_LINKS: SocialLinks = {
    github: 'https://github.com/codewitharjun214',
    linkedin: 'https://www.linkedin.com/in/kadamarjun214/',
    email: 'kadamarjun171@gmail.com',
    phone: '+918261053320',
};