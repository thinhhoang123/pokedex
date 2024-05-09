import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      grass: {
        400: '#5AC178',
        500: '#5FBC51',
      },
      water: {
        400: '#6CBDE4',
        500: '#4A90DD',
      },
      fire: {
        400: '#FBAE46',
        500: '#FB9B51',
      },
      bug: {
        400: '#AFC836',
        500: '#92BC2C',
      },
      ground: {
        400: '#D29463',
        500: '#DC7545',
      },
      dark: {
        400: '#9298A4',
        500: '#6E7587',
      },
      ice: {
        400: '#8CDDD4',
        500: '#70CCBD',
      },
      dragon: {
        400: '#0180C7',
        500: '#0C69C8',
      },
      normal: {
        400: '#A3A49E',
        500: '#9298A4',
      },
      electric: {
        400: '#FBE273',
        500: '#EDD53E',
      },
      poison: {
        400: '#C261D4',
        500: '#A864C7',
      },
      fairy: {
        400: '#F3A7E7',
        500: '#EC8CE5',
      },
      psychic: {
        400: '#FE9F92',
        500: '#F66F71',
      },
      fighting: {
        400: '#E74347',
        500: '#CE4265',
      },
      rock: {
        400: '#D7CD90',
        500: '#C5B489',
      },
      steel: {
        400: '#58A6AA',
        500: '#52869D',
      },
      flying: {
        400: '#A6C2F2',
        500: '#90A7DA',
      },
      ghost: {
        400: '#7773D4',
        500: '#516AAC',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

