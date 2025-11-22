
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder | undefined => 
  PlaceHolderImages.find(img => img.id === id);

export interface Project {
  id: number;
  title: string;
  description: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  image: ImagePlaceholder;
  videoThumbnail: ImagePlaceholder;
  videoUrl: string;
  liveUrl: string;
  contributorIds: number[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Quizmaster AI',
    description: 'QuizMasterAI is a next-gen assessment platform using Next.js and Supabase to enforce academic integrity. It uses Google Gemini for smart quiz creation and prevents cheating with fullscreen lockdowns and focus tracking, offering a fair and seamless experience for both teachers and students.',
    problemStatement: 'In the era of digital education, conducting fair and efficient online assessments remains a significant challenge. Educators often struggle with the time-consuming process of manually creating diverse questions and grading attempts. More critically, maintaining academic integrity is difficult, as students can easily bypass standard interfaces to search for answers, take screenshots, or use automation tools, rendering the results unreliable.',
    solution: 'QuizMasterAI offers a secure, AI-powered assessment platform using Google Gemini to generate quizzes instantly. Its Anti-Cheat System includes browser lockdown and tab-switching detection to ensure fairness. With real-time analytics and leaderboards, it creates a trustworthy environment for remote evaluations.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase'],
    image: getImage('project-1')!,
    videoThumbnail: getImage('video-thumbnail-1')!,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    liveUrl: 'https://quizzer-five-phi.vercel.app/',
    contributorIds: [1],
  },
  {
    id: 2,
    title: 'CampusConnect ERP',
    description: 'A decentralized social networking application focused on privacy and user data ownership, built on modern web3 technologies.',
    problemStatement: 'University administrative tasks are fragmented across multiple systems, leading to inefficiency and a disjointed experience for students and staff.',
    solution: 'CampusConnect ERP integrates all aspects of university management—from course registration to financial aid and campus events—into a single, unified platform for a seamless user experience.',
    technologies: ['React', 'Solidity', 'GraphQL', 'Firebase'],
    image: getImage('project-2')!,
    videoThumbnail: getImage('video-thumbnail-2')!,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    liveUrl: '#',
    contributorIds: [2, 3],
  },
  {
    id: 3,
    title: 'LearnOverse',
    description: 'A futuristic, component-based operating system UI designed for creative professionals, with a focus on workflow and modularity.',
    problemStatement: 'Creative professionals often find their workflow interrupted by switching between multiple applications. Standard operating systems lack the flexibility needed for a fluid creative process.',
    solution: 'LearnOverse provides a modular, component-based UI that allows users to build their own workspace. It integrates essential tools for designers and developers into a cohesive, distraction-free environment.',
    technologies: ['Langchain', 'vite', 'Tailwind Css'],
    image: getImage('project-3')!,
    videoThumbnail: getImage('video-thumbnail-3')!,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    liveUrl: '#',
    contributorIds: [1, 2],
  },
  {
    id: 4,
    title: 'SkillSwap',
    description: 'A real-time data visualization tool that renders complex network graphs and data flows for large-scale enterprise systems.',
    problemStatement: 'Professionals looking to learn a new skill often face high costs for courses and a lack of practical application. It is difficult to find others to learn with and practice.',
    solution: 'SkillSwap is a peer-to-peer platform where users can trade skills. An expert in one area can teach a novice, and in return, be taught a skill they wish to learn, creating a collaborative learning ecosystem.',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'WebSocket'],
    image: getImage('project-4')!,
    videoThumbnail: getImage('video-thumbnail-4')!,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    liveUrl: '#',
    contributorIds: [3],
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
    name: 'Ayushman Patra',
    role: 'Web-Developer',
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
