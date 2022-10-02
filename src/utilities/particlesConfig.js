const particles = {
  number: {
    value: 355,
    density: {
      enable: true,
      value_area: 789.1476416322727,
    },
  },
  color: {
    value: "#ffffff",
  },
  shape: {
    type: "circle",
    stroke: {
      width: 0,
      color: "#000000",
    },
    polygon: {
      nb_sides: 5,
    },
  },
  opacity: {
    value: 0.25,
    random: false,
    anim: {
      enable: true,
      speed: 0.2,
      opacity_min: 0,
      sync: false,
    },
  },
  size: {
    value: 2,
    random: true,
    anim: {
      enable: true,
      speed: 2,
      size_min: 0,
      sync: false,
    },
  },
  line_linked: {
    enable: false,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1,
  },
  move: {
    enable: true,
    gravity: {
      enable: true,
      acceleration: 0.1,
      maxSpeed: 0.05,
    },
    speed: 0.5,
    direction: "none",
    random: true,
    straight: false,
    out_mode: "out",
    bounce: false,
    attract: {
      enable: false,
      rotateX: 600,
      rotateY: 1200,
    },
  },
};

const interactivity = {
  detect_on: "canvas",
  events: {
    onhover: {
      enable: true,
      mode: "bubble",
    },
    onclick: {
      enable: true,
      mode: "push",
    },
    resize: true,
  },
  modes: {
    grab: {
      distance: 400,
      line_linked: {
        opacity: 1,
      },
    },
    bubble: {
      distance: 83.91608391608392,
      size: 1.5,
      duration: 3,
      opacity: 1,
      speed: 3,
    },
    repulse: {
      distance: 200,
      duration: 0.4,
    },
    push: {
      particles_nb: 10,
    },
    remove: {
      particles_nb: 2,
    },
  },
};

export default {
  fullScreen: {
    enable: false,
    zIndex: 20,
  },
  fpsLimit: 120,
  particles,
  interactivity,
  retina_detect: true,
};
