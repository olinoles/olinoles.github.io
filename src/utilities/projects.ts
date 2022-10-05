export interface Photo {
  src: string;
  name?: string;
}

export interface Project {
  name: string;
  gallery: Photo[];
  description: string;
  skills: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Surf Life Saving Incident Platform",
    gallery: [
      {
        src: "src/assets/projects/sls/main.jpg",
      },
      {
        src: "/src/assets/projects/sls/1.jpg",
      },
      {
        src: "src/assets/projects/sls/2.jpg",
      },
      {
        src: "src/assets/projects/sls/3.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.\n\n The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. \n\nPrior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Vue", "Javascript", "Firebase"],
  },
  {
    name: "KiwiQuads Ecommerce Website",
    gallery: [
      {
        src: "src/assets/projects/kiwiquads/main.jpg",
      },
      {
        src: "src/assets/projects/kiwiquads/1.jpg",
      },
      {
        src: "src/assets/projects/kiwiquads/2.jpg",
      },
      {
        src: "src/assets/projects/kiwiquads/3.jpg",
      },
    ],
    description:
      "KiwiQuads is an Ecommerce business I cofounded in 2017. As the technical cofounder, I was resposible for building the website and automating our ecommerce operations.\n\nI chose Wordpress and WooCommerce for the site as it is highly customisable and open source. I was able to build the website in PHP and Javascript to our exact specifications.\n\nThe business is still running under new ownership and has been largely successful.",
    skills: ["Wordpress", "PHP", "Javascript"],
  },
  {
    name: "Ecommerce Order Dispatch",
    gallery: [
      {
        src: "src/assets/projects/dispatch/main.jpg",
      },
      {
        src: "src/assets/projects/dispatch/2.jpg",
      },
      {
        src: "src/assets/projects/dispatch/3.jpg",
      },
      {
        src: "src/assets/projects/dispatch/4.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.\n\n The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. \n\nPrior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Vue", "Javascript", "GraphQL", "C#"],
  },
  {
    name: "TheMarket Storefront",
    gallery: [
      {
        src: "src/assets/projects/themarket/main.jpg",
      },
      {
        src: "src/assets/projects/themarket/1.jpg",
      },
      {
        src: "src/assets/projects/themarket/2.jpg",
      },
      {
        src: "src/assets/projects/themarket/3.jpg",
      },
    ],
    description:
      "TheMarket.com is one of New Zealand's largest Ecommerce businesses. It is owned by TheWarehouse Group. I worked for TheMarket as a Front-end software engineer from 2021-2022 and built and maintained the main Storefront website.\n\nWhile working at TheMarket, I was responsible for building and maintaining the storefront VueJS SPA, collaborating with product and design teams, and conducting code reviews with other developers.",
    skills: ["Vue", "Javascript", "HTML"],
  },
  {
    name: "ASColour Interactive Display",
    gallery: [
      {
        src: "src/assets/projects/ascolour/main.jpg",
      },
      {
        src: "src/assets/projects/ascolour/1.jpg",
      },
      {
        src: "src/assets/projects/ascolour/2.jpg",
      },
      {
        src: "src/assets/projects/ascolour/3.jpg",
      },
      {
        src: "src/assets/projects/ascolour/4.jpg",
      },
      {
        src: "src/assets/projects/ascolour/4.jpg",
      },
      {
        src: "src/assets/projects/ascolour/4.jpg",
      },
    ],
    description:
      "The AS Colourmatic is an interactive storefront display designed to analyse the user's clothing colour choices and prescribe them a complimentary 'better colour'.\n\nI was chosen to work on this project for my experience using Adobe Animate and ActionScript. I worked closely with another developer to build a front and back-end system that would provide a fun experience for the users.\n\nI was responsible for the developing the user-friendly front-end application and integrating it with our C# Kinect application running behind the scenes.",
    skills: ["C#", "Javascript", "CSS"],
  },
];
