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
      title: "Currently building a JS Animation library",
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
      title: "Primech Agency",
      des: "Prime Agency specializes in web development, UI/UX design, and graphic design. They offer custom website creation, user-friendly interfaces, and high-quality visual branding. Their services help businesses establish a strong online presence and deliver engaging user experiences.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
      link: "https://primech.vercel.app/",
    },
    {
      id: 2,
      title: "Hoo Bank",
      des: "HooBank is a next-generation payment method that helps users find the best credit cards for their needs. Their team of experts uses a specialized methodology to analyze annual percentage rates, annual fees, and other factors to identify the most suitable credit cards for each individual.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/tail.svg"],
      link: "https://hoobank-mk.vercel.app/",
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
      title: "Primech Agency Landing Page",
      des: "Primech Agency landing pages is all about web development services. They offer innovative and scalable solutions to elevate businesses online in the field of web services.",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://primech-web-mk.vercel.app/",
    },
  ];
  
  
  export const workExperience = [
    {
      id: 1,
      title: "Lead Front-end Developer at Primech",
      desc: "As Web Development Team Lead at Primech Agency, I manage projects and a team delivering high-quality web applications. I lead development using various technologies like ReactJs, mentor junior developers, and drive innovation while ensuring optimal performance and user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Junior Front-end developer at JtechSight",
      desc: "As a Junior Web Developer at Jtechsight, I developed responsive web pages and collaborated with designers and project managers to meet project requirements, utilizing technologies like HTML, CSS, and JavaScript. My contributions helped launch successful projects and enhance user experiences.",
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