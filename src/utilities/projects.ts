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
    name: "Mapto.app - Map builder",
    gallery: [
      {
        src: "projects/mapto/main.jpg",
      },
      {
        src: "/projects/mapto/1.jpg",
      },
      {
        src: "/projects/mapto/2.jpg",
      },
    ],
    description:
      "Mapto (https://mapto.app) is a web-based map building tool allowing users to create an interactive, creative map using custom images. I describe it as 'like Canva, for maps'. It's currently a work-in-progress I'm completing in my spare time and hope to officially launch soon. It features a powerful React front-end with a Node.js backend and Postgres database.\n\nI built this project to learn more about the Mapbox API and to create a tool that I could use in my other projects. I've enjoyed the challenge of building a complex front-end application.",
    skills: ["React", "Typescript", "Node", "Postgres", "Mapbox"],
  },
  {
    name: "Surf Life Saving Incident Platform",
    gallery: [
      {
        src: "projects/sls/main.jpg",
      },
      {
        src: "/projects/sls/1.jpg",
      },
      {
        src: "projects/sls/2.jpg",
      },
      {
        src: "projects/sls/3.jpg",
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
        src: "projects/kiwiquads/main.jpg",
      },
      {
        src: "projects/kiwiquads/1.jpg",
      },
      {
        src: "projects/kiwiquads/2.jpg",
      },
      {
        src: "projects/kiwiquads/3.jpg",
      },
    ],
    description:
      "KiwiQuads is an Ecommerce business I cofounded in 2017. As the technical cofounder, I was responsible for building the website and automating our ecommerce operations.\n\nI chose Wordpress and WooCommerce for the site as it is highly customisable and open source. I was able to build the website in PHP and Javascript to our exact specifications. I also did the DevOps for this website which were demanding as we had over 2000 products and 10,000 monthly shoppers.\n\nThe business is still running under new ownership and has been largely successful.",
    skills: ["Wordpress", "PHP", "Javascript"],
  },
  {
    name: "Ecommerce Fulfillment SaaS",
    gallery: [
      {
        src: "projects/dispatch/main.jpg",
      },
      {
        src: "projects/dispatch/2.jpg",
      },
      {
        src: "projects/dispatch/3.jpg",
      },
      {
        src: "projects/dispatch/4.jpg",
      },
    ],
    description:
      "Astroship is an Ecommerce SaaS I designed in 2020. The software aims to automate the Ecommerce fulfillment flow from when orders are placed, to when they are shipped to the customer. The software integrates with Ecommerce platforms such as Shopify and WooCommerce to import business data.\n\nI was the developer responsible for building both the front-end and back-ends for this platform. The front-end uses the latest Vue3 Composition API with Typescript and has CSS powered by Tailwind.\nThe backend is a serverless API powered by NoSQL DynamoDB and AWS Lambda.",
    skills: ["Vue", "Javascript", "NoSQL", "Node API"],
  },
  {
    name: "TheMarket Storefront",
    gallery: [
      {
        src: "projects/themarket/main.jpg",
      },
      {
        src: "projects/themarket/1.jpg",
      },
      {
        src: "projects/themarket/2.jpg",
      },
      {
        src: "projects/themarket/3.jpg",
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
        src: "projects/ascolour/main.jpg",
      },
      {
        src: "projects/ascolour/1.jpg",
      },
      {
        src: "projects/ascolour/2.jpg",
      },
      {
        src: "projects/ascolour/3.jpg",
      },
      {
        src: "projects/ascolour/4.jpg",
      },
    ],
    description:
      "The AS Colourmatic is an interactive storefront display designed to analyse the user's clothing colour choices and prescribe them a complimentary 'better colour'.\n\nI was chosen to work on this project for my experience using Adobe Animate and ActionScript. I worked closely with another developer to build a front and back-end system that would provide a fun experience for the users.\n\nI was responsible for the developing the user-friendly front-end application and integrating it with our C# Kinect application running behind the scenes.",
    skills: ["C#", "Javascript", "CSS"],
  },
];
