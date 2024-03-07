import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({addUtilities})
    {
      const newUtilities={
        '.scrollbar-thin':{
          scrollbarWidth : "thin",
          scrollbarColor :"#FFD54F white"
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar":{
            width:"8px"
          },
          "&::-webkit-scrollbar-track":{
            background:"white"
          },
          "&::-webkit-scrollbar-thumb":{
            backgroundColor:"#FFD54F",
            borderRadius:"20px"
          }
        }
      }

      addUtilities(newUtilities,["responsive","hover"])
    }
  ],
};
export default config;
