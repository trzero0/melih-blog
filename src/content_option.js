
const logotext = "MELIH";
const meta = {
    title: "Melih Özturk",
    description: "I’m Melih Özturk Software Engineer _ Full stack developer",
};

const introdata = {
    title: "I’m Melih",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I code games",
    },
description: "Full Stack Developer with a passion for building modern web apps, games, and AI-powered systems.",
    your_img_url: "./mlh.jpg",
};

const dataabout = {
title: "A bit about myself",
aboutme: `
I'm Melih Özturk, a Software Engineer graduate from Metropolia University of Applied Sciences. I enjoy designing and building functional, visually appealing digital solutions—whether it's a web application, a game, or a system that leverages AI.
  
My technical skills cover a wide range of modern tools and technologies, including React, .NET, Java, Python, PostgreSQL, and Azure. I've been involved in diverse projects where I've contributed to both frontend interfaces and backend logic.

I also enjoy designing user interfaces with Figma, and I always work with great attention to detail and a strong focus on the user experience.

I'm a collaborative team player, a fast learner, and I genuinely enjoy solving problems. I'm experienced in agile methodologies and Git version control.
`

};
const worktimeline = [{
        jobtitle: "Project for Metropolia UAS",
        where: "Helsinki",
        date: "2025",
    },
    {
        jobtitle: "Assisting Local Restaurant",
        where: "Helsinki",
        date: "2024",
    },
    {
        jobtitle: "Mini Game Project for omnia",
        where: "Espoo",
        date: "2022",
    },
];

const skills = [
    { name: "Python", value: 100 },
    { name: "React", value: 100 },
    { name: "Javascript", value: 100 },
    { name: "Java", value: 90 },
    { name: "Jquery", value: 90 },
    { name: "C#", value: 100 },
    { name: ".NET", value: 100 },
    { name: "TypeScript", value: 100 },
    { name: "MSSQL", value: 100 },
    { name: "Node", value: 100 },
    { name: "Express", value: 100 },
    { name: "Vite", value: 100 },
    { name: "Django", value: 100 },
    { name: "Tailwind CSS", value: 100 },
    { name: "HeidiSQL", value: 100 },
    { name: "PostgreSQL", value: 100 },
    { name: "Azure", value: 100 },
    { name: "MongoDB", value: 100 },
    { name: "Jest", value: 90 },
    { name: "JUnit Testing", value: 90 },
    { name: "Git", value: 100 },
    { name: "Unity 2D&3D", value: 100 },
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
        description: "Designing intuitive and visually appealing user interfaces with Figma and modern design principles to ensure seamless user experiences.",
    },
    {
        title: "Full-Stack Development",
        description: "Building complete web applications from frontend to backend using technologies such as React, Node.js, Express, Django, and .NET.",
    },
    {
        title: "Frontend Development",
        description: "Developing responsive and dynamic user interfaces with React, Vite, TypeScript, JavaScript, and Tailwind CSS.",
    },
    {
        title: "Backend Development",
        description: "Implementing scalable and secure server-side solutions with Python, Java, C#, Node.js, Express, Django, and .NET, integrated with SQL and NoSQL databases.",
    },
    {
        title: "Database Management",
        description: "Designing, managing, and optimizing relational and non-relational databases including PostgreSQL, MSSQL, MongoDB, and HeidiSQL.",
    },
    {
        title: "Cloud & DevOps",
        description: "Deploying and managing applications in cloud environments like Microsoft Azure, ensuring scalability, performance, and reliability.",
    },
    {
        title: "Testing & Quality Assurance",
        description: "Writing and maintaining automated tests with Jest and JUnit to ensure code quality, reliability, and maintainability.",
    },
    {
        title: "Game Development",
        description: "Creating engaging 2D and 3D games using Unity and Blender, from prototyping to polished releases.",
    },
    {
        title: "Multilingual Communication",
        description: "Providing services and collaboration in English, Finnish, and Turkish to support international projects and teams.",
    }
];


const dataportfolio = [
    {
        img: "/fitness.png",
        description: "CLOSEDAI: Fitness Tracker App built using React, Vite, and Tailwind CSS for the frontend, and Python’s FastAPI, PostgreSQL, Google Firebase, and ChatGPT 3.5 API for the backend. Designed (UI/UX) using Figma.",
        link: "https://github.com/trzero0/ClosedAI",
    },
    {
        img: "/cs.png",
        description: "React web application that provides statistics, events, and news about Counter-Strike 2 E-sports. The data is sourced from the unofficial HLTV npm package (GitHub - gigobyte/HLTV: The unofficial HLTV Node.js API).",
        link: "https://github.com/Xarros0/ClosedAI-CS2-Tracker",
    },
    {
        img: "/pong.png",
        description: "Developed both 2D and 3D games in Unity. Examples include 'Taxiescape', 'Pong', and 'Snake Game,' viewable in my GitHub repository.",
        link: "https://github.com/trzero0/pongGame",
    },
    {
        img: "/airport.png",
        description: "An airport simulation created in Java as a school project, where we calculate how long it takes for a customer to move through various stages such as ticket check, security check, gate processing, and boarding the plane.",
        link: "https://github.com/trzero0/airport-simulator",
    },
    {
        img: "/resepti.png",
        description: "Website where you can search for your desired dish, view the recipe, and learn how to prepare it.",
        link: "https://github.com/trzero0/FoodApp",
    },
    {
        img: "/PLS.png",
        description: "Analyzed solar panel sensor data using KNIME and Python, developed a React UI connected to a KNIME server via an Express API, enabling data visualization. Managed the project with agile methods and Trello.",
        link: "https://github.com/trzero0/anturidataa/tree/main",
    },
];

    


const contactConfig = {
  YOUR_EMAIL: "melih.ozt24@gmail.com",
  YOUR_FONE: "+358401571041",
  description: "Available for job offers.",
 // Formspree form endpoint
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