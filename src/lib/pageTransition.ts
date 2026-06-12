export const pageTransition = {
  forwards: {
    old: {
      name: "page-leave",
      duration: "190ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "page-enter",
      duration: "280ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fillMode: "both",
    },
  },
  backwards: {
    old: {
      name: "page-leave-back",
      duration: "190ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fillMode: "both",
    },
    new: {
      name: "page-enter-back",
      duration: "280ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fillMode: "both",
    },
  },
} as const;
