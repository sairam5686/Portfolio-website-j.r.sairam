import reactify from '../assets/projects/reactify-2.png';
import ableton from '../assets/projects/Ableton clone.jpg';
import airizer from '../assets/projects/image.png';
import ams from '../assets/projects/Attendance monitoring system.png';
import wizardz from '../assets/projects/wizardz.png';
import gemini from '../assets/projects/Gemini 2.0.png';
import multiple from '../assets/projects/Multiple Disease Analyzer.png';
import user_management from '../assets/projects/User_management_system.png';
import weather_man from '../assets/projects/weather-icon.jpg'



export const HERO_CONTENT = `Hello, I'm Sairam, a passionate software developer with a knack for crafting digital solutions. My journey in programming has been an exciting exploration of creating efficient and seamless applications. With strong foundation in Python , Reactjs , Expressjs, Framer ,Nodejs, MongoDB,  etc  and version control using Git and GitHub, my goal is to build systems that not only perform flawlessly but also deliver an exceptional user experience`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - present",
    role: "Bachelor of Engineering in Computer Science and Engineering",
    description: `RAJALAKSHMI INSTITUTE OF TECHNOLOGY, 2026`,
    technologies: [],
  },
  {
    year: "2022 ",
    role: "Senior Secondary Education",
    company: "",
    description: `SMT K N SHAH PMC V VIDYALAYA  PERAMBUR CHENNAI`,
     technologies: [],
  },
  {
    year: "2021 ",
    role: "Secondary Education",
    company: "",
    description: `SMT K N SHAH PMC V VIDYALAYA  PERAMBUR CHENNAI`,
    technologies: [],
  },
 
];

export const PROJECTS = [
  {
    title: "Reactify",
    image: reactify,
    description:"Reactify is an innovative AI-powered code generator designed to streamline the development of full-stack and React applications. With its ability to deliver live previews using WebContainer and generate efficient, scalable code via an LLM wrapper class, Reactify makes development faster and more accessible. Built entirely with TypeScript, it ensures type safety, maintainability, and a robust development experience.",
    technologies: ["React js",  "Typescript", "Web Container", "Express js" ,"Node js"],
    link: `https://github.com/sairam5686/Reactify`
  },
  {
    title: " Multiple Disease Analyzer",
    image: multiple ,
    description:
      "The Multiple Disease Analyzer is a Python-based machine learning project designed to analyze and predict various diseases based on input data. This tool leverages machine learning and deep learning models with an interactive web application using Streamlit.",
    technologies: ["Python", "Pandas", "Tensorflow" ,"Streamlit"],
    link: `https://github.com/sairam5686/Multiple-disease-analyzer`
  },
  {
    title: "User Management System",
    image:  user_management,
    description:
      "The User Management System is a web application built with HTML, CSS, Javascript, , MongoDB and Node.js. It provides a platform for managing users, enabling CRUD (Create, Read, Update, Delete) operations with a clean and user-friendly interface. The backend uses Express.js for routing and MongoDB as the database.",
    technologies: ["HTML", "CSS", "EJS", "MongoDB","Express js"],
    link:`https://github.com/sairam5686/User-Management-System`
  },
  {
    title: "Gemini 2.0(Clone)",
    image: gemini,
    description:
      "This is a Gemini 2.0 Clone project built using React and the Gemini API. The application offers a seamless and responsive design, replicating the core functionalities of the Gemini platform with a modern user interface.",
    technologies: ["React js", "Tailwind CSS", "Redux Toolkit"],
    link:`https://unrivaled-babka-792493.netlify.app/`
  },
  {
    title: "Airizer",
    image: airizer,
    description:
      "Airizer simplifies your content, extracting your long articles in seconds. With Gemini’s Wrapper class, Airizer offers customizable, concise summaries so you can focus on what truly matters..",
    technologies: ["React js", "Tailwind CSS", "Redux toolkit",],
    link:`https://github.com/sairam5686/airizer`
  },{
    title: "Attendance Monitoring System Using Face Recognition",
    image: ams,
    description:
      "This project is a Python-based Attendance Monitoring System that uses face recognition to mark attendance. ",
    technologies: ["Python" ,"OpenCV" ,"TKinter","openpyxl"],
    link:`https://github.com/sairam5686/attendance-monitoring-system-using-face-recognition`
  },
  {
    title: "WizardZ",
    image: wizardz,
    description:
      "A modern and dynamic frontend clone built with HTML, CSS, JavaScript, and animations powered by GSAP (GreenSock Animation Platform).",
    technologies: ["HTML", "CSS", "Javascript", "GSAP"],
    link:`https://github.com/sairam5686/WizardZ`
  },
  {
    title: "Ableton(Clone)",
    image: ableton,
    description:
      "A front-end practice project where I recreated the Ableton website using only HTML and CSS. This project focuses on replicating the design, layout, and responsiveness of the Ableton homepage to enhance my front-end development skills.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:`https://github.com/sairam5686/Albeton-clone`
  },
  {
    title: "Weather Man",
    image: weather_man,
    description:
      "Weather Man is a web-based application built using HTML, CSS, and JavaScript. It provides real-time weather updates for any location by fetching data from a weather API. The app is responsive, visually appealing, and easy to use.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:`https://github.com/sairam5686/Weather-Man`
  }
];

export const CONTACT = {
  
  phoneNo: " +91 87544 55609 ",
  email: "jrsairam5686@gmail.com",
};


export const INTERN = [
  {
    year: "2024",
    role: "Full Stacks Intern",
    description: `Worked on a government project under the Power & Energy sector as a
backend developer and database manager to build a website using Node.js,
Express.js, MongoDB, and Reactjs to visualize and analyze the life cycle of
electricity for 12 Districts through 880 Feeders in Tamil Nadu`,
     company: "Derelle Consulting Private Limited",

    technologies: ["React js","Node and Expressjs" ,"MongoDB"],
  }
]