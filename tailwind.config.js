/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef4f9',
          100: '#d4e3f0',
          200: '#a8c7e1',
          300: '#7daad2',
          400: '#528ec3',
          500: '#3673b0',
          600: '#2a5a8c',
          700: '#234a72',
          800: '#1d3a5a',
          900: '#172d46',
          950: '#0e1d30',
        },
        accent: {
          50: '#fdf3e7',
          100: '#f9dfc0',
          200: '#f2bf7e',
          300: '#ec9f3c',
          400: '#e78920',
          500: '#cc6f0e',
          600: '#a5570a',
          700: '#7e4208',
          800: '#572d06',
          900: '#311a03',
        },
        steel: {
          50: '#f5f6f7',
          100: '#e5e8ea',
          200: '#cdd3d7',
          300: '#a9b3ba',
          400: '#7d8b95',
          500: '#5f6e79',
          600: '#4c5862',
          700: '#3f4851',
          800: '#363d44',
          900: '#2e333a',
          950: '#1c2025',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
