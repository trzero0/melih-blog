const logotext = "MELIH";

const meta = {
  title: "Melih Özturk",
  description: "I’m Melih Özturk — Software Engineer | Full Stack Developer",
};

const introdata = {
  title: "I’m Melih",
  animated: {
    first: "I love coding",
    second: "I build full-stack applications",
    third: "I create games",
  },
  description:
    "Full Stack Developer with a passion for building modern web apps, games, and AI-powered systems.",
  your_img_url: "./mlh.jpg",
};

const dataabout = {
  title: "A bit about myself",
  aboutme: `
I'm Melih Özturk, a Software Engineering graduate from Metropolia University of Applied Sciences.  
I enjoy designing and building functional, visually appealing digital solutions—whether it's a web application, a game, or an AI-powered system.

My technical skills cover a wide range of modern tools and technologies, including React, .NET, Java, Python, PostgreSQL, and Azure.  
I've contributed to diverse projects, working on both frontend interfaces and backend logic.

I also enjoy designing user interfaces with Figma, always with attention to detail and a strong focus on user experience.

As a collaborative team player and fast learner, I thrive in agile environments and love solving complex problems.  
I’m experienced in Git version control and agile methodologies.
  `,
};

const worktimeline = [
  {
    jobtitle: "Java Course Development (Metropolia UAS)",
    where: "Helsinki",
    date: "2025",
  },
  {
    jobtitle: "Assisting Local Restaurant (MBNÖ)",
    where: "Helsinki",
    date: "2024",
  },
  {
    jobtitle: "Mini Game Project (Omnia)",
    where: "Espoo",
    date: "2022",
  },
];

const skills = [
  { name: "Python", value: 100 },
  { name: "React", value: 100 },
  { name: "Javascript", value: 100 },
  { name: "Java", value: 90 },
  { name: "C#", value: 100 },
  { name: ".NET", value: 100 },
  { name: "TypeScript", value: 100 },
  { name: "MSSQL", value: 100 },
  { name: "Node.js", value: 100 },
  { name: "Express.js", value: 100 },
  { name: "Vite", value: 100 },
  { name: "Django", value: 100 },
  { name: "Tailwind CSS", value: 100 },
  { name: "PostgreSQL", value: 100 },
  { name: "MongoDB", value: 100 },
  { name: "Azure", value: 100 },
  { name: "Git", value: 100 },
  { name: "Jest", value: 90 },
  { name: "JUnit Testing", value: 90 },
  { name: "Unity 2D & 3D", value: 100 },
  { name: "Blender", value: 100 },
  { name: "Figma (UI/UX)", value: 100 },
  { name: "Frontend", value: 100 },
  { name: "Backend", value: 100 },
  { name: "Full-Stack", value: 100 },
  { name: "English", value: 100 },
  { name: "Finnish", value: 100 },
  { name: "Turkish", value: 100 },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces with Figma and modern design principles.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications from frontend to backend using React, Node.js, Express, Django, and .NET.",
  },
  {
    title: "Frontend Development",
    description:
      "Developing responsive and dynamic user interfaces with React, Vite, TypeScript, JavaScript, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description:
      "Implementing scalable and secure server-side solutions with Python, Java, C#, Node.js, Express, Django, and .NET.",
  },
  {
    title: "Database Management",
    description:
      "Designing, managing, and optimizing databases including PostgreSQL, MSSQL, MongoDB, and HeidiSQL.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications in cloud environments like Microsoft Azure for scalability and reliability.",
  },
  {
    title: "Testing & QA",
    description:
      "Ensuring code quality and reliability with automated tests using Jest and JUnit.",
  },
  {
    title: "Game Development",
    description:
      "Creating engaging 2D and 3D games using Unity and Blender, from prototypes to polished releases.",
  },
  {
    title: "Multilingual Collaboration",
    description:
      "Working fluently in English, Finnish, and Turkish to support international teams and projects.",
  },
];

const dataportfolio = [
  {
    img: "/fitness.png",
    description:
      "CLOSEDAI: Fitness Tracker App built with React, Vite, and Tailwind CSS (frontend) and FastAPI, PostgreSQL, Firebase, and ChatGPT API (backend).",
    link: "https://github.com/trzero0/ClosedAI",
  },
  {
    img: "/cs.png",
    description:
      "CS2 Tracker: React web app showing esports stats and news for Counter-Strike 2 using HLTV Node.js API.",
    link: "https://github.com/Xarros0/ClosedAI-CS2-Tracker",
  },
  {
    img: "/pong.png",
    description:
      "Unity 2D & 3D games, including Taxiescape, Pong, and Snake Game — available in my GitHub repository.",
    link: "https://github.com/trzero0/pongGame",
  },
  {
    img: "/airport.png",
    description:
      "Java-based airport simulator calculating customer flow through ticketing, security, and boarding processes.",
    link: "https://github.com/trzero0/airport-simulator",
  },
  {
    img: "/resepti.png",
    description:
      "Food Recipe Search: Website to search dishes, view recipes, and cooking instructions.",
    link: "https://github.com/trzero0/FoodApp",
  },
  {
    img: "/PLS.png",
    description:
      "AnturiData: Solar panel data analysis project with KNIME & Python backend, React frontend, and Express API integration.",
    link: "https://github.com/trzero0/anturidataa/tree/main",
  },
];

const contactConfig = {
  YOUR_EMAIL: "melih.ozt24@gmail.com",
  YOUR_FONE: "+358401571041",
  description: "Available for job opportunities and collaborations.",
  FORMSPREE_URL: "https://formspree.io/f/xdklkkrq",
};

const socialprofils = {
  github: "https://github.com/trzero0",
  linkedin: "https://www.linkedin.com/in/melih0zturk",
};

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
