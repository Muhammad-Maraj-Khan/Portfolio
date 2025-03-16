import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently mastering 2D and 3D web animation using GSAP and Spline",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Oparko",
    des: "Oparko is a smart parking management platform that provides automated parking control solutions using ANPR cameras and a digital platform. The frontend, built with React.js, ensures a seamless user experience, featuring an intuitive UI for managing parking reservations, enforcement, and rentals. The project emphasizes performance optimization, responsive design, and API integration for real-time parking data. ",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://oparko.com/",
  },
  {
    id: 2,
    title: "Veed.io",
    des: "Veed.io is an online video editing platform that enables users to create, edit, and share videos effortlessly. It provides features like auto-subtitles, background removal, screen recording, and collaboration tools to simplify video content creation.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://www.veed.io/",
  },
  {
    id: 3,
    title: "Janus Advisory Solution",
    des: "Janus Advisory Solutions is a consulting firm that specializes in providing strategic advice and solutions to businesses. They focus on helping companies navigate complex challenges and achieve their goals through tailored strategies and expert guidance. Their services likely include business strategy, operational improvement, and organizational transformation.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://janusadvisorysolutions.com",
  },
  {
    id: 4,
    title: "Armory by Cisotronix",
    des: "Cisotronix provides the Armory War Room, a cybersecurity platform for ethical hacking simulations and security analysis. The React.js-based frontend ensures an intuitive UI with real-time data visualization, responsive design, and seamless user experience.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://cisotronix.com/",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Senior Webflow Developer at Growmodo",
    desc: "As a Senior Webflow Developer at Growmodo, I specialized in building high-quality, interactive websites using Webflow with custom code integrations. I leveraged GSAP for smooth animations and custom interactions, utilized AI tools like Relume for efficient design workflows, and incorporated 3D elements using Spline to enhance user experience. My role involved optimizing performance, ensuring seamless animations, and delivering visually compelling web experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Lead Front-end Developer at Primech",
    desc: "As Web Development Team Lead at Primech Agency, I manage projects and a team delivering high-quality web applications. I lead development using various technologies like ReactJs, mentor junior developers, and drive innovation while ensuring optimal performance and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Muhammad-Maraj-Khan"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/muhammad-maraj-khan/"
  },
];