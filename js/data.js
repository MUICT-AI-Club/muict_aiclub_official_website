/**
 * data.js — All static content for AI Club site.
 * Edit this file to update members, projects, workshops, and links.
 */

/* ============================================================
   CONFIG — update these links
   ============================================================ */
const config = {
  joinFormUrl: 'https://forms.gle/FBG7NwsGXikZpENP9',
  workshopFormUrl: '',
};

/* ============================================================
   MEMBERS
   status:   'current' = active member  |  'alumni' = graduated
   linkedin: paste your LinkedIn profile URL, or '' to hide
   github:   paste your GitHub URL, or '' to hide
   photo:    null = show initials; or 'assets/name.jpg'
   gradYear: graduation year, shown on alumni cards (alumni only)
   ============================================================ */
const members = [
  {
    id: 1,
    name: 'WINNY SIPPAKORN',
    role: 'President',
    bio: '',
    photo: '',
    status: 'current',
    linkedin: '',
    github: '',
    gradYear: null,
  },
  {
    id: 2,
    name: 'ANT NOPWAREE',
    role: 'Vice President',
    bio: ';-;',
    photo: null,
    status: 'current',
    linkedin: '',
    github: '',
    gradYear: null,
  },
  {
    id: 3,
    name: 'Jasmine rice KANYANAT',
    role: 'Graphic Designer',
    bio: '',
    photo: null,
    status: 'current',
    linkedin: '',
    github: '',
    gradYear: '',
  },
  {
    id: 4,
    name: 'DIA THANYATHIP',
    role: 'Housekeeper',
    bio: '',
    photo: 'assets/dia.jpg',
    status: 'current',
    linkedin: 'https://www.linkedin.com/in/thanyathip-korapintavangkul-697979241/',
    github: '',
    gradYear: null,
  },
  {
    id: 5,
    name: 'TANG EAKBODIN',
    role: 'President',
    bio: '',
    photo: '',
    status: 'current',
    linkedin: '',
    github: '',
    gradYear: null,
  },
  {
    id: 6,
    name: 'TERM PHUSIT',
    role: 'Vice President',
    bio: '',
    photo: '',
    status: 'current',
    linkedin: '',
    github: '',
    gradYear: null,
  },
    {
    id: 7,
    name: 'BEE SUSHAWAPAK',
    role: 'President (Aug 2024 - Dec 2024)',
    bio: '',
    photo: 'assets/bee.jpg',
    status: 'alumni',
    linkedin: 'https://www.linkedin.com/in/sushawapakka/',
    github: '',
    gradYear: '2024',
  },
  {
    id: 8,
    name: 'PRINCE SITTIPHON',
    role: 'Vice President (Aug 2024 - Dec 2024)',
    bio: '',
    photo: 'assets/prince.jpg',
    status: 'alumni',
    linkedin: 'https://www.linkedin.com/in/sittiphon/',
    github: '',
    gradYear: '2024',
  },
  {
    id: 9,
    name: 'BOAT PHURIWAT',
    role: 'President (Mar 2024 - May 2024)',
    bio: '',
    photo: 'assets/boat.jpg',
    status: 'alumni',
    linkedin: '',
    github: 'https://acitronella.github.io/',
    gradYear: '2023',
  },
  {
    id: 10,
    name: 'DECH DANAIDECH',
    role: 'Secretary',
    bio: '',
    photo: 'assets/dech.jpg',
    status: 'alumni',
    linkedin: 'https://www.linkedin.com/in/danaidech-ardsamai-35965b1b8/',
    github: 'https://github.com/nungsorb',
    gradYear: '2023',
  },
  
];

/* ============================================================
   PROJECTS
   status: 'done' | 'wip'
   ============================================================ */
const projects = [
  {
    emoji: '💻',
    title: 'Alveolar Antral Artery Detection in CBCT Images HACKATHON',
    tags: ['Deep Learning', 'Python', 'Image Detection'],
    desc: 'Developed a deep learning model for medical image detection, Improved model performance using dropout layers, early stopping, and data augmentation',
    team: 'Core Team',
    year: '2024',
    status: 'done',
    gradient: 'linear-gradient(135deg, #0f2027, #203a43)',
  },
  
  
];

/* ============================================================
   WORKSHOPS
   registerUrl: Google Form / external link, or '' to hide button
   ============================================================ */
const workshops = [
  {
    date: '17 FEB 2026',
    name: 'Workshop: Introduction to Deep Learning, Image Processing Techniquues',
    desc: '16.00-18.00 @IT204 *Please bring your laptop for this workshop',
    attendees: 17,
    registerUrl: '',
  },
  {
    date: '27 JAN 2026',
    name: 'Workshop: Introduction to NLP and LLMs, Build the Chatbot and Prompt Engineering',
    desc: '16.00-18.00 @IT204 *Please bring your laptop for this workshop',
    attendees: 17,
    registerUrl: '',
  },
  {
    date: '20 JAN 2026',
    name: 'Workshop: Basic of Machine Learning',
    desc: '16.00-17.30 @IT210 *Please bring your laptop for this workshop',
    attendees: 24,
    registerUrl: '',
  },
  {
    date: '20 JAN 2026',
    name: '25 throgh 26',
    desc: '16.00-17.30 @IT210 By Aj.Akara Supratak (AI Club Advisor) and Mr.Puriwat Angkoondittaphong (Founding AI Club President)',
    attendees: 24,
    registerUrl: '',
  },
  {
    date: '27 AUG 2025',
    name: 'Diversity & AI',
    desc: '13.00-14.00 @IT204 Explore diversity and inclusion in AI, Gain new perspectives from industry experience by P.Fon Data Team Lead, AIMET, Women Techmakers Ambassador',
    attendees: 32,
    registerUrl: '',
  },
  {
    date: '25 APR 2025',
    name: 'Building and Deploying Intelligent RAG-based Chatbots with Langflow and LLMS',
    desc: '9.00-12.00 @IT310 Get hands-on with Langflow and RAG architecture, Learn how to build smart bots using LLMs and Vector stores by Kontawat Wisetpaitoon (P.Meng) Senior Technical Analyst (ML Engineer) TTB',
    attendees: 37,
    registerUrl: '',
  },
  {
    date: '12 MAR 2025',
    name: 'FIRST DATE 2025 Activity and Talk Session',
    desc: '13.00-14.30 @IT204 Deep into the Fundamental: How Maths Makes ML Magical by Pat Vatiwutipong (P.Gui)',
    attendees: 25,
    registerUrl: '',
  },
  {
    date: '11 SEP 2024',
    name: 'HACKATHON WORKSHOP',
    desc: '13.00-16.00 @IT303 Image segmentation',
    attendees: 58,
    registerUrl: '',
  },
  {
    date: '28 AUG 2024',
    name: 'IMAGE SEGMENTATION AND KEYPOINT DETECTION',
    desc: '13.00-16.00 @IT303 (A non-member can also join)',
    attendees: 28,
    registerUrl: '',
  },
  {
    date: '21 AUG 2024',
    name: 'OPEN AI CLUB',
    desc: '13.00-15.00 @IT303 Introduction to AI',
    attendees: 16,
    registerUrl: '',
  },
  
 
];
