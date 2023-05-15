import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },  { 
     title: "React Native", 
     icon: mobile, 
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
    name: "Redux Toolkit",
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
    name: "MongoDB",
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
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Next.js Frontend Developer(contract)",
    company_name: "Playjoor",
    icon: "https://pps.whatsapp.net/v/t61.24694-24/241291221_230991255874455_1902867379368839560_n.jpg?ccb=11-4&oh=01_AdQQv3g9NDCQSLtfLJS7_WYeu4QbqgHKzyeos12Jnw9bVA&oe=64391E0F",
    iconBg: "#BA253D",
    date: "March 2021 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack developer",
    company_name: "Arewabooks",
    icon: "https://www.arewabooks.com/headerlogo.png",
    iconBg: "#005bff",
    date: "Jan 2022 - till Date",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer (intern)",
    company_name: "Digital Abundance",
    icon: "https://uploads-ssl.webflow.com/622b1486a6cc74d19f97dbef/625e58c71ab33766644633d6_Digital%20Abundance%20logo%202.png",
    iconBg: "#00a166",
    date: "Oct 2021 - December 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked on different softwares with different features and functions",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Paul is amazing! He gets the job done .",
    name: "Precious David",
    designation: "CEO",
    company: "Readersplug",
    image:
      "https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-1/323697029_1094090961263373_5640651323987900309_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEX9yNqOY5BLoyGg1YSRDjL6qIk_wFCR4rqoiT_AUJHio7dCtrLBXJrTzsQ2z9Xq7-D6BIxgC8dBbG7sHojmdWd&_nc_ohc=eLWNbZ4Nr14AX9mADfT&_nc_ht=scontent.flos3-1.fna&oh=00_AfAnjXbJKdQGTk172EWEGWGYcihhGFe8YGZbqZpjaQwv_g&oe=64553AAF",
  },
  {
    testimonial: "Paul is very passionate and I admire that part of him",
    name: "Umar Muhammad",
    designation: "CEO",
    company: "Arewabooks",
    image:
      "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-1/318212578_3297756740467816_4133923595824317939_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEbqJ-dXx-npBttzyDPg1A5Av6T-Za1FTYC_pP5lrUVNoMjp9Nu-geyIG3v-sdBmydnL5AfYKQxwMoFeKSwGSnp&_nc_ohc=-MQ29a4TVVsAX8-BRT1&_nc_ht=scontent.flos3-2.fna&oh=00_AfD7zl6xhvQDY6y8rcOVFHjqd4fhe9cJvJ1563KRagoQHQ&oe=64542C26",
  },
  {
    testimonial: "Paul is always learning",
    name: "Mr.Afam ",
    designation: "CEO",
    company: "Playjor",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/223923901_263864472259753_5237833066474087777_n.jpg?ccb=11-4&oh=01_AdRaJ-aHJtk0ATwkv2rtPAD-5cqph1BKjCIUIh7VcLEFbA&oe=643935A7",
  },
  {
    testimonial: "Paul is an amazing dev. Loved working with him",
    name: "Mr.Ramadan",
    designation: "Developer",
    company: "Softwares",
    image:
      "https://pps.whatsapp.net/v/t61.24694-24/164902555_1956155934582217_676961592964813526_n.jpg?ccb=11-4&oh=01_AdS290hXN5HS7SKRXoCzlpVWBl95DuW85WDUM162ko-4Ew&oe=64391CA4",
  },
];

const projects = [
  {
    name: "Readersplug Waitlist",
    description:
      "A webPage showing a proffesional waitlist ui I built for the waiting list of  a social reading platform",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Dolph.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://techiportfolio.vercel.app/_next/image?url=%2Ffourth-gig.png&w=3840&q=75",
    source_code_link: "https://github.com/",
  },
  {
    name: "Techx",
    description:
      "A blog I built to improve as a developer . used a lot of technologies and practiced CMS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://techiportfolio.vercel.app/_next/image?url=%2Ffirst-gig.png&w=2048&q=75",
    source_code_link: "https://techx.com.ng/",
  },
  {
    name: "Mathematician Portfolio",
    description:
      "A portfolio I built for a mathematician to showcase his expertise . I Used sanity.io to give him full flexibility",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://techiportfolio.vercel.app/_next/image?url=%2Ffifth-gig.png&w=3840&q=75",
    source_code_link: "https://emekasportfolio.vercel.app/",
  },
  {
    name: "Techgix",
    description:
      "A blog that gives you a weekly summary of all that's happening in the tech world.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "pink-text-gradient",
      },
    ],
    image: "/techgix.png",
    source_code_link: "https://techgix.vercel.app/",
  },

  {
    name: "Hidden Me",
    description:
      "A webPage where you make stories of your day. Built with next.js (full stack frameworl)",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://techiportfolio.vercel.app/_next/image?url=%2Fthird-gig.png&w=3840&q=75",
    source_code_link: "https://techopenai.vercel.app/",
  },

  {
    name: "Payday (clone)",
    description: "cloning the homepage of a fintech. ",
    tags: [
      {
        name: "Vanila js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Html",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://techiportfolio.vercel.app/_next/image?url=%2Ftwelveth.png&w=3840&q=75",
    source_code_link: "https://payday-clone.vercel.app/",
  },
  {
    name: "A School admin DashBoard",
    description: "Built for a Client . Used Mui .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: "/tesco.png",
    source_code_link: "https://tesco-pro.vercel.app/",
  },
  {
    name: "Blog",
    description:
      "Built for a Client . Used wordpress and a little custom code. Added newsletter, send welcome mail, worked on seo etc",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
    ],
    image: "/uncovered9ja.png",
    source_code_link: "https://uncovered9ja.com.ng/",
  },
];

export { services, technologies, experiences, testimonials, projects };
