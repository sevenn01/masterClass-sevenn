/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        orangeColor:"var(--orangeColor)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      boxShadow: {
        'complex': '0px 0px 10px 3px var(--greenColor),0px 0px 29.8px 3px var(--greenColor)',
        'light': '0px 10px 30.8px 0px rgb(255,255,255, .2)',

      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        sign: {
          '0%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 1), 0px 0px 29.8px 3px rgba(36, 255, 0, 1)' },
          '50%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 0.5), 0px 0px 29.8px 3px rgba(36, 255, 0, 0.5)' },
          '100%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 1), 0px 0px 29.8px 3px rgba(36, 255, 0, 1)' },
        },
        pulse: {
          '0%': {opacity:1},
          '50%': {opacity:.5},
          '100%': {opacity:1},
        }
      },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'sign-soon': 'sign 2s linear infinite',
        "pulse": "pulse 2.2s linear infinite",
       
      },
      
      fontFamily: {
        indie: ['Indie Flower','cursive'],
        inter: ['Inter', 'sans-serif'],
        impact: ['var(--font-impact)'],
        LiuJian: ['Liu Jian Mao Cao', 'cursive']
      },
    
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

//import type { Config } from "tailwindcss";

// const config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       screens: {
//         '1235px': '1235px',
//       },
//       boxShadow: {
//         'complex': '0px 0px 10px 3px var(--greenColor),0px 0px 29.8px 3px var(--greenColor)',
//         'light': '0px 10px 30.8px 0px rgb(255,255,255, .2)',

//       },

//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
      
//       keyframes: {
//         sign: {
//           '0%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 1), 0px 0px 29.8px 3px rgba(36, 255, 0, 1)' },
//           '50%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 0.5), 0px 0px 29.8px 3px rgba(36, 255, 0, 0.5)' },
//           '100%': { boxShadow: '0px 0px 10px 3px rgba(36, 255, 0, 1), 0px 0px 29.8px 3px rgba(36, 255, 0, 1)' },
//         },
//       },
//       animation: {
//         'sign-soon': 'sign 2s linear infinite',
//       }
      
//     },

//     fontFamily: {
//       indie: ['Indie Flower','cursive'],
//       inter: ['Inter', 'sans-serif'],
//       impact: ['var(--font-impact)'],
//       LiuJian: ['Liu Jian Mao Cao', 'cursive']
//     },

    
    

//   },
//   plugins: [],
// };
// export default config;
// */