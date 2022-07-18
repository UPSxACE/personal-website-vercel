import p1 from "./project_pics/1.jpg";
import p2 from "./project_pics/2.jpg";
import p3 from "./project_pics/3.jpg";
import p4 from "./project_pics/4.png";
import p5 from "./project_pics/5.png";
import p6 from "./project_pics/6.png";
import p7 from "./project_pics/7.png";
import p8 from "./project_pics/8.png";
import p9 from "./project_pics/9.png";

//smlPic - 480x270px
//medPic - 960x640px
//bigPic - 1920x1080px

export const projects = [
  {
    title: "React online portfolio",
    smlPic: p6,
    medPic: p5,
    bigPic: p4,
    typeString: "React",
    typeArray: ["React"],
    info: "My online portfolio, now created with the help of the amazing technology of Next.js and vercel. Highly customizable, with 3 different themes, incorporating some useful libraries, such as framer motion, to provide a fairly satisfying user experience.",
    status: "In progress",
    technologies: "React",
    startdate: "5th July 2022",
    finishdate: undefined,
    demo: "https://vercel.eduardobotelho.com",
    source: undefined,
  },
  {
    title: "Quarry manager platform",
    smlPic: p9,
    medPic: p8,
    bigPic: p7,
    typeString: "React, Yii2",
    typeArray: ["React", "Yii2"],
    info: "A platform for a quarry company, that consists in a website where people can register and order different kinds of stone, and a dashboard where the company employees can manage the stock and the online store. The purpose of this project was to practice the technologies I was learning at the moment, Yii2 and React. Two prototypes were created: the first that was a fullstack MVC app based on Yii2 alone, and the second where the front-end was migrated to React, and connected through RESTful web services. Both had basically the same features, but only the final version(React) was styled.",
    status: "Done",
    technologies:
      "React, Yii2, MariaDB, Bootstrap 4, Html5, CSS3, PHP, JavaScript",
    startdate: "23rd February 2022",
    finishdate: "23rd June 2022",
    demo: undefined,
    source: undefined,
  },
  {
    title: "Static online portfolio",
    smlPic: p6,
    medPic: p5,
    bigPic: p4,
    typeString: "Wordpress",
    typeArray: ["Wordpress"],
    info: "This was my first online portfolio, created line by line. When I started it I had very little experience, so lots of things are not designed exactly the best way possible, even because I ran multiple experiments on it. My goal, was to make it as much responsive as possible.",
    status: "Done",
    technologies: "Wordpress, HTML5, CSS3, Bootstrap 5",
    startdate: "11th January 2022",
    finishdate: "21st February 2022",
    demo: undefined,
    source: undefined,
  },
  {
    title: "Bragança 3D render, using Lumion",
    smlPic: p3,
    medPic: p2,
    bigPic: p1,
    typeString: "Others",
    typeArray: ["Others"],
    info: "This project consists of the 2D and 3D modeling of the two streets that intersect to form the Bragança viaduct, and later on, the rendering of it in Lumion.",
    status: "Done",
    technologies: "AutoCAD, ArchiCAD, Adobe Premiere, Lumion",
    startdate: "8th January 2021",
    finishdate: "8th July 2021",
    demo: undefined,
    source:
      "https://docs.google.com/presentation/d/10moLW6XEujsBBZuDGd_6wheEUK5Ug57r/edit?usp=sharing&ouid=103088477902107777295&rtpof=true&sd=true",
  },
];
