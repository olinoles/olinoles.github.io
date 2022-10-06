import granim from "granim";

const darkGradients = [
  ["#0f172a", "#0f172a"],
  ["#141e36", "#0f172a"],
  ["#0f172a", "#111c36"],
  ["#1e1136", "#0f172a"],
  ["#141e36", "#0f172a"],
  ["#0f172a", "#11362e"],
];
const lightGradients = [
  ["#139c95", "#39819e"],
  ["#ebbf46", "#489e16"],
];
export function startGranim(isDark: boolean) {
  return new granim({
    element: "#granim-canvas",
    name: "granim",
    states: {
      "default-state": {
        gradients: isDark ? darkGradients : lightGradients,
      },
    },
  });
}
