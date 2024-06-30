import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    CloudPractitioner,
    html,
    CloudComputingFundamentals,
    css,
    Tely10MileRoadRace,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    jobit,
    tripguide,
    threejs,
    snake, 
    car,
    carrent,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Project",
    },
    {
      id: "education",
      title:"Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Memorial University of Newfoundland",
      icon: web,
      description: "Bachelors of Science", 
      newline: "Major: Computer Science",
      anotherline: "GPA: 3.84",
    },
    {
      title: "Middle East Technical University",
      icon: mobile,
      description: "Bachelors of Engineering",
      newline: "Computer Engineering (Transferred)",
      anotherline: "GPA: 3.58",
    },
  ];
  
  
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Verafin",
      icon: meta,
      iconBg: "#383E56",
      date: "September 2022 - April 2023",
      points: [
        "Collaborated with the Release Automation Team in the Cloud Division, specializing in Amazon Web Services, to drive efficiency and effectiveness in deployment processes.",
        "Developed, containerized, and optimized Tomcat applications, directly contributing to enhanced deployment efficiency and scalability.",
        "Successfully deployed software artifacts, resulting in reduced latency for end-users and improved overall performance.",
        "Actively contributed to the design and implementation of automated release processes, streamlining software delivery pipelines, and minimizing manual intervention.",
        "Demonstrated a results-driven approach by consistently focusing on improving deployment processes, optimizing performance, and achieving tangible outcomes in software delivery",

      ],
    },
  ];

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "AWS",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Sql",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "The AWS Certified Cloud Practitioner.",
      name: " AWS Cloud Practitioner ",
      company: "UDEMY",
      image: CloudPractitioner,
    },
    {
      testimonial:
        "This credential earner demonstrates knowledge of cloud computing, including cloud services, deployment models, virtualization, orchestration, and cloud security.",
      name: " Cloud Computing Fundamentals ",
      company: "IBM",
      image: CloudComputingFundamentals,
    },
    {
      testimonial:
        "This credential earner demonstrates a foundational understanding of cybersecurity concepts, objectives, and practices.",
      name: "Cybersecurity Fundamentals.",
      company: "IBM",
      image: CloudComputingFundamentals,
    },
  ];
  
  const projects = [
    {
      name: "Stock-Trading Game",
      description:
       "This project stock trading game project offers an engaging simulation of the stock market, integrating real-time data from the New York Stock Exchange (NYSE) to provide an authentic trading experience. Users can make virtual investments, manage their portfolios, and stay updated with market trends through a secure and intuitive platform. Leveraging .NET for backend processing and user authentication, Node.js for real-time updates, and HTML for a user-friendly interface, this project combines various technologies to ensure a dynamic and seamless trading environment.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/BilalNaseer7773/Stock-Trading-Game",
    },
    {
      name: " Grid Search",
      description:
        "The Grid-Search project presents a JavaScript implementation of a sophisticated search algorithm tailored for pathfinding in grid-based environments, utilizing the A* search algorithm enhanced with graph search techniques. This flexible and efficient solution is ideal for applications in robotics, video games, and logistics, offering customizable search configurations, support for various heuristic functions, and a modular code structure. The Search_Student class drives the search functionality, while the Node class manages individual search tree nodes. This implementation includes methods for grid initialization, search iteration, and legality checks, with practical examples demonstrating usage and integration.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "SearchAlgorithns",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/BilalNaseer7773/Grid-Search",
    },
    {
      name: "Kings Domino",
      description:
        "We developed a digital version of the popular board game KingsDomino. This project involved recreating the game's mechanics in a digital format, allowing users to enjoy the strategic gameplay of KingsDomino online. The application features an intuitive user interface, smooth animations, and multiplayer support, providing an engaging experience for players. By implementing the game's rules and dynamics programmatically, this digital version captures the essence of KingsDomino while offering the convenience and accessibility of online play.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
        {
          name: "TeamWork",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/LordOfBon/comp2005-winter22-group10?fbclid=IwY2xjawDs_GlleHRuA2FlbQIxMAABHWaJHB9stTD-xdh0SCy0wd8Mg5u2So2Mzs10lSZ88BE-XgDCO6ic82U8Ng_aem_GzE5wTsR2d8BP2WW7w5JFg",
    },
    {
      name: "Data Visualization",
      description:
        "In this repository I have used a number of different data sets for different scenarios. Further I have utilized different python libraries and widgets to make the visualizations more interactive.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "green-text-gradient",
        },
        {
          name: "Numpy",
          color: "pink-text-gradient",
        },
        {
          name: "IPYwidgets",
          color: "yellow-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/BilalNaseer7773/Data-Visualizations/tree/main",
    },
    {
      name: "Tely 10 Race",
      description:
        "The Tely10 Mile Road Race project visually represents the history and significance of this annual event, emphasizing key achievements and participant trends. The infographic features a detailed map of the race route from Paradise to St. John's, highlighting record-breaking performances by Matt Loiselle in 2012 and Anne Johnston in 2019. It showcases the most successful male and female participants, including Colin Fewer and Lisa Harvey. The project also includes a graph illustrating the steady increase in the number of participants from 2005 to 2019, peaking at 4,354 runners in 2017. The description celebrates the race's growing popularity and the diversity of its participants, underscoring the event's importance in fostering community spirit and athletic excellence.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Seaborn",
          color: "green-text-gradient",
        },
        {
          name: "Matplotlib",
          color: "pink-text-gradient",
        },
        {
          name: "pandas",
          color: "yellow-text-gradient",
        },
      ],
      image: Tely10MileRoadRace,
      source_code_link: "https://github.com/BilalNaseer7773/Tely10MileRace",
    },
    {
      name: " Car Game",
      description:
        "A thrilling car game desgined to test and improve your reaction times! As you navigate the lanes,dodging oncomings cars and accelerating through levels, you'll find yourself immersed in a dynamic exprience that sharpens your reflexes. The game's increasing speed keep one on their toes, making each session a pulse-pounding adventure.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/BilalNaseer7773/Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects }; 