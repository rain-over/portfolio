import { CardDetail } from './types';

export const about = `I am a Full-stack Developer with a specialization in .NET and 
  a decade of experience in Web Development. My expertise extends to being a 
  Frontend Developer with a focus on component-based frameworks like Web 
  Components and React. I have a strong background in team management, having 
  served as a scrum master and mentor in various roles. My experience 
  encompasses diverse working arrangements, including multi-project 
  assignments, in-flight project deployments, and the ability to work both 
  independently and with teams of varying sizes. I am well-versed in the 
  Agile way of working, with a particular proficiency in the scrum methodology. 
  Additionally, I bring experience in risk management, project documentation, 
  and familiarity with common CI/CD and ALM tools to the table.`;

export const currentTech: string[] = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Git',
  'Tailwind',
  'Framer Motion',
  'HTML',
  'CSS',
];

export const experienceData: CardDetail[] = [
  {
    cardTitle: 'Senior Front-End Developer',
    cardSubtitle: 'ING Bank',
    cardDetailedText:
      'I worked as a Senior Front-End where I took part in several projects including in the development of a virtual bank. I primarily used component-based Front-end frameworks and was heavily involved in my projects CI/CD and overall Risk Management.',
    date: '2023',
    img: 'logo_ing.png',
  },
  {
    cardTitle: 'Full Stack Developer',
    cardSubtitle: 'Encora Inc.',
    cardDetailedText:
      'I worked as a Senior Full Stack Engineer for an outsourcing company that would deploy me in teams that required support during development. My stack includes, C#, .NET, MS SQL, and a myriad of front-end libraries and frameworks.',
    date: '2019',
    img: 'logo_enc.png',
  },
  {
    cardTitle: 'Full Stack Developer, Scrum Master',
    cardSubtitle: 'Accenture Inc.',
    cardDetailedText:
      'Where I started my career as software developer where I upskilled into a Full Stack Engineer and eventually a Scrum master. My specialization is.NET combined with the appropriate JavaScript Library.',
    date: '2018',
    img: 'logo_acn.png',
  },
  {
    cardTitle: 'College',
    cardSubtitle: 'Saint Louis University - Philippines',
    cardDetailedText: "Graduated a bachelor's Degree in Information Technology",
    date: '2011',
    img: 'logo_slu.png',
  },
];

export const skillsData = [
  'C#',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Web Components',
  'Lit Element',
  'Polymer',
  'Angular',
  'Vue',
  'Node.js',
  'Git',
  'Tailwind',
  'Redux',
  'Framer Motion',
  'HTML',
  'CSS',
  'Jest',
  'Cypress',
  'Karma',
  '@web/test-runner',
  '.NET',
  '.NET Core',
  'Common ORMs',
  'ASP.NET',
  'RESTful APIs',
  'Web Services',
  'MVC',
  'MVVM/Razor Pages',
  'MS SQL Server',
] as const;

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;
