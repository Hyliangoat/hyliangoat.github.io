export const socialLinks = {
  github: 'https://github.com/hyliangoat',

  // Add the real values before final deployment.
  linkedin: 'https://www.linkedin.com/in/jordan-purdy-0891973b4/',
  email: 'j.l.purdy@proton.me',
};

export const projectFilters = [
  'All',
  'Web',
  'Python',
  'C#',
  'Games',
  'Art',
  'Music',
  'Misc',
];

export const projects = [
  {
    id: 'poke-planets',
    number: '01',
    title: 'Poké Planets',
    subtitle: 'Full-Stack RPG + CS 499 Capstone',
    description:
      'A NASA-powered turn-based RPG enhanced across software architecture, algorithms, and database engineering.',
    categories: [
      'Web',
      'Games',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Express',
      'PostgreSQL',
      'Docker',
    ],
    href: 'https://github.com/Hyliangoat/SDI-Project-Two/tree/enhancement/database',
    featured: true,
  },

  {
    id: 'baseball-card',
    number: '02',
    title: 'Baseball Card Tracker',
    subtitle: 'Full-Stack Web Application',
    description:
      'A local-first card collection application with authentication, image uploads, PostgreSQL persistence, and Docker.',
    categories: [
      'Web',
    ],
    technologies: [
      'React',
      'Express',
      'PostgreSQL',
      'JWT',
      'Docker',
    ],
    href: 'https://github.com/Hyliangoat/SDI-Project-3-Full-Stack',
    featured: false,
  },

  {
    id: 'pirate-agent',
    number: '03',
    title: 'Pirate Intelligent Agent',
    subtitle: 'Deep Reinforcement Learning',
    description:
      'A reinforcement-learning agent trained with a Deep Q-Network to navigate an environment and reach a target.',
    categories: [
      'Python',
    ],
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'DQN',
    ],
    href: 'https://github.com/Hyliangoat/SNHU-CS-370-Emerging-Trends',
    featured: false,
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      'Python',
      'JavaScript',
      'C++',
      'C#',
      'Java',
      'HTML / CSS',
    ],
  },

  {
    title: 'Web + Data',
    items: [
      'React',
      'Node',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'REST APIs',
    ],
  },

  {
    title: 'Tools + Creative',
    items: [
      'Git',
      'Docker',
      'Godot',
      'Unity',
      'Pico-8',
      'Linux',
    ],
  },
];