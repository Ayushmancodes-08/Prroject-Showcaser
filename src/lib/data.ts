import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => 
  PlaceHolderImages.find(img => img.id === id);

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: ImagePlaceholder;
  contributorIds: number[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Quizmaster AI',
    description: 'An advanced machine learning platform for predictive analytics, transforming data into actionable insights with unparalleled speed and accuracy.',
    technologies: ['Next.js', 'Python', 'PyTorch', 'Tailwind CSS'],
    image: getImage('project-1')!,
    contributorIds: [1, 4],
  },
  {
    id: 2,
    title: 'CampusConnect ERP',
    description: 'A decentralized social networking application focused on privacy and user data ownership, built on modern web3 technologies.',
    technologies: ['React', 'Solidity', 'GraphQL', 'Firebase'],
    image: getImage('project-2')!,
    contributorIds: [2, 3],
  },
  {
    id: 3,
    title: 'LearnOverse',
    description: 'A futuristic, component-based operating system UI designed for creative professionals, with a focus on workflow and modularity.',
    technologies: ['SvelteKit', 'TypeScript', 'Electron', 'Vite'],
    image: getImage('project-3')!,
    contributorIds: [1, 2],
  },
  {
    id: 4,
    title: 'SkillSwap',
    description: 'A real-time data visualization tool that renders complex network graphs and data flows for large-scale enterprise systems.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'WebSocket'],
    image: getImage('project-4')!,
    contributorIds: [3, 4],
  },
];

export interface Contributor {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: ImagePlaceholder;
  skills: string[];
}

export const contributors: Contributor[] = [
  {
    id: 1,
    name: 'Alina Petrova',
    role: 'Lead Frontend Engineer',
    bio: 'Alina is a passionate frontend developer with a keen eye for design and a love for creating intuitive, performant user interfaces.',
    avatar: getImage('contributor-1')!,
    skills: ['Frontend', 'React', 'Next.js', 'UI/UX'],
  },
  {
    id: 2,
    name: 'Kenji Tanaka',
    role: 'UX/UI Designer',
    bio: 'Kenji crafts beautiful and user-centric experiences. He believes that good design is not just how it looks, but how it works.',
    avatar: getImage('contributor-2')!,
    skills: ['UX Design', 'UI Design', 'Figma', 'Prototyping'],
  },
  {
    id: 3,
    name: 'Maria Garcia',
    role: 'Project Manager',
    bio: 'Maria keeps the team on track and ensures that projects are delivered on time and to the highest quality standards.',
    avatar: getImage('contributor-3')!,
    skills: ['Agile', 'Scrum', 'Jira', 'Product Strategy'],
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'Backend & DevOps',
    bio: 'David architects robust and scalable systems, ensuring our applications are always running smoothly and efficiently.',
    avatar: getImage('contributor-4')!,
    skills: ['Backend', 'DevOps', 'Python', 'AWS'],
  },
];

export interface Mentor {
  name: string;
  role: string;
  description: string;
  image: ImagePlaceholder;
}

export const mentor: Mentor = {
  name: 'Dr. Evelyn Reed',
  role: 'Principal Investigator & Mentor',
  description: "Dr. Reed is a renowned expert in human-computer interaction and artificial intelligence. With over 20 years of experience in the tech industry and academia, she provides invaluable guidance to the team, steering the projects towards innovation and excellence. Her mentorship is pivotal in shaping the team's approach to problem-solving and long-term vision.",
  image: getImage('mentor-1')!,
};
