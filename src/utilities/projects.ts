interface Photo {
  src: string;
  name?: string;
}

export interface Project {
  name: string;
  photo: Photo;
  gallery: Photo[];
  description: string;
  skills: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    name: "Surf Life Saving Incident Platform",
    photo: {
      src: "src/assets/projects/sls/main.jpg",
    },
    gallery: [
      {
        src: "../assets/projects/sls/1.jpg",
      },
      {
        src: "../assets/projects/sls/2.jpg",
      },
      {
        src: "../assets/projects/sls/3.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.<br /><br /> The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. <br /><br />Prior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Vue", "Javascript", "Firebase"],
  },
  {
    name: "KiwiQuads Ecommerce Website",
    photo: {
      src: "src/assets/projects/kiwiquads/main.jpg",
    },
    gallery: [
      {
        src: "../assets/projects/kiwiquads/1.jpg",
      },
      {
        src: "../assets/projects/kiwiquads/2.jpg",
      },
      {
        src: "../assets/projects/kiwiquads/3.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.<br /><br /> The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. <br /><br />Prior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Wordpress", "PHP", "Javascript"],
  },
  {
    name: "Ecommerce Order Dispatch",
    photo: {
      src: "src/assets/projects/dispatch/main.jpg",
    },
    gallery: [
      {
        src: "../assets/projects/dispatch/1.jpg",
      },
      {
        src: "../assets/projects/dispatch/2.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.<br /><br /> The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. <br /><br />Prior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Vue", "Javascript", "GraphQL", "C#"],
  },
  {
    name: "TheMarket Storefront",
    photo: {
      src: "src/assets/projects/themarket/main.jpg",
    },
    gallery: [
      {
        src: "../assets/projects/themarket/1.jpg",
      },
      {
        src: "../assets/projects/themarket/2.jpg",
      },
      {
        src: "../assets/projects/themarket/3.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.<br /><br /> The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. <br /><br />Prior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["Vue", "Javascript", "HTML"],
  },
  {
    name: "ASColour Interactive Display",
    photo: {
      src: "src/assets/projects/ascolour/main.jpg",
    },
    gallery: [
      {
        src: "../assets/projects/ascolour/1.jpg",
      },
      {
        src: "../assets/projects/ascolour/2.jpg",
      },
      {
        src: "../assets/projects/ascolour/3.jpg",
      },
    ],
    description:
      "I was contracted by Lime Digital to build this web platform for Surf Life Saving NZ. This SPA uses a Google Firebase backend to power a real-time incident reporting platform for use by SLS NZ staff.<br /><br /> The platform uses VueJS and a UI library for the front-end. I worked closely with a designer and project owner to help build the application ready for the 2022 Summer release. <br /><br />Prior to this project, I hadn't worked with Firebase or any Map libraries, so I enjoyed taking on the challenge of learning and implementing these technologies into this project to achieve its goals.",
    skills: ["C#", "Javascript", "CSS"],
  },
];
