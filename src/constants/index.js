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
  },
  {
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
    title: "Full Stack Developer ",
    company_name: "Blockroll",
    icon: "https://www.blockroll.app/assets/svg/blockroll-dark-logo.svg",
    iconBg: "#fff",
    date: "Oct 2023 - Present",
    points: [
      "Build Fintech MVP within projected Time .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked on different softwares with different features and functions",
    ],
  },
  {
    title: "Full stack web and mobile developer",
    company_name: "Arewabooks",
    icon: "https://www.arewabooks.com/headerlogo.png",
    iconBg: "#005bff",
    date: "Jan 2022 - Oct 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Managing mobile app for both Android and iOS ",
    ],
  },
  
  {
    title: "Full Stack Developer (intern)",
    company_name: "Digital Abundance",
    icon: "https://uploads-ssl.webflow.com/622b1486a6cc74d19f97dbef/625e58c71ab33766644633d6_Digital%20Abundance%20logo%202.png",
    iconBg: "#00a166",
    date: "Sept 2021 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked on different softwares with different features and functions",
    ],
  },
  {
    title: "Next.js Frontend Developer(contract)",
    company_name: "Playjoor",
    icon: "/afam.jpg",
    iconBg: "#BA253D",
    date: "March 2021 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Paul is amazing! He gets the job done .",
    name: "Precious David",
    designation: "CEO",
    company: "Readersplug",
    image: "/precido.jpg",
  },
  {
    testimonial: "Paul is very passionate and I admire that part of him",
    name: "Umar Muhammad",
    designation: "CEO",
    company: "Arewabooks",
    image: "/umar.jpg",
  },
  {
    testimonial: "Paul is always learning",
    name: "Mr.Afam ",
    designation: "CEO",
    company: "Playjor",
    image: "/afam.jpg",
  },
  {
    testimonial: "Paul is an amazing dev. Loved working with him",
    name: "Mr.Ramadan",
    designation: "Developer",
    company: "Softwares",
    image: "/ramadan.jpg",
  },
];

const projects = [
  {
    name: "JettyDelivery",
    description:
      "Get Items delivered to you as soon as Possible",
    tags: [
      {
        name: "next.js (admin dashbard)",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://i.ibb.co/HBwgdQF/Screenshot-265.png",
    source_code_link: "https://jettydelivery.ng",
  },
  {
    name: "Techgix",
    description:
      "Stay updated with technews, Learn and connect with like minds",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity",
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
      "https://i.ibb.co/74jnpFm/Screenshot-266.png",
    source_code_link: "https://techgux.xyz",
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
    name: "Ivara",
    description:
      "A global Agency. We have everything to get your business up and running",
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
    image: "https://i.ibb.co/1TFYm43/Screenshot-267.png",
    source_code_link: "https://ivara.co.uk",
  },

  {
    name: "Sopuson Waitlist",
    description:
      "Buy products without fear of been scammed",
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
      "https://i.ibb.co/gdRW0pv/Screenshot-268.png",
    source_code_link: "https://waitlist.sopusons.com",
  },

  {
    name: "Ninety9",
    description: "Buy and sell Crypto",
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
      "https://i.ibb.co/g7THvXN/Screenshot-269.png",
    source_code_link: "https://ninety9.vercel.app/dashboard",
  },
  {
    name: "Playjoor",
    description: "A social media application",
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
        name: "Nextjs",
        color: "green-text-gradient",
      },
    ],
    image: "https://i.ibb.co/Ln0VCnd/Screenshot-270.png",
    source_code_link: "https://onlyally.vercel.app/login",
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
