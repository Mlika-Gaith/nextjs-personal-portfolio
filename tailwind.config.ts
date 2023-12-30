import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dotGradient': 'linear-gradient(180deg,rgb(17,17,17),#A4161A)',
        'dotGradientHover': 'linear-gradient(180deg,rgb(17,17,17),#A4161A)',
      },
      colors:{
        'default': 'rgb(235,236,243)',
        'brand': '#A4161A',
        'background': 'rgb(17,17,17)',
        'bg-opaque': 'rgb(17,17,17,0.25)',
        'background-light': 'rgb(35,35,35)',
        'background-dark': 'rgb(8,8,8)',
      },
      fontSize:{
        'xs': '1.6rem',
        'sm': '1.8rem',
        'md': '2.2rem',
        'lg': '3.6rem',
        'xl': '5.6rem',
        '2xl': '9.6rem',
      },
    },
  },
  plugins: [],
}
export default config
