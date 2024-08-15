/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: { 
        "pmarker": ['Permanent Marker', 'sans-serif'] ,
        "gloria": ['Gloria Hallelujah', 'sans-serif'] ,
        "oswald": ['Oswald', 'sans-serif']
    } 
    },
  },
  plugins: [],
}

