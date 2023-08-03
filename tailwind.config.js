/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "#80A260",
        "main-color": "#FEFCEE",
        wheat: "#f5deb3",
        grey: "#E3D6D5",
      },
      borderRadius: {
        "4xl": "32px",
      },
      borderWidth: {
        1: "1px",
      },
      zIndex: {
        none: "-1",
      },
      height: {
        2.5: "10px",
        3.5: "14px",
        68: "273px",
        75: "297px",
        92: "368px",
        100: "400px",
        110: "440px",
        112: "448px",
        120: "480px",
      },
      width: {
        2.5: "10px",
        3.5: "14px",
        68: "273px",
        75: "297px",
        92: "368px",
        100: "400px",
        110: "440px",
        112: "448px",
        120: "480px",
      },
      maxWidth: {
        "4/5": "80%",
      },
      minHeight: {
        10: "40px",
      },
      maxHeight: {
        68: "273px",
        75: "297px",
      },
      translate: {
        "4/2": "200%",
        "9/4": "220%",
        "5/2": "250%",
      },
    },
    screens: {
      "mobile-l": "400px",
      mobile: "480px",
    },
  },
  plugins: [],
};
