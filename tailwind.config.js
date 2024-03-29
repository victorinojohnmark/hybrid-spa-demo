/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-50': 'rgb(var(--red-50))',
        'primary-100': 'rgb(var(--red-100))',
        'primary-200': 'rgb(var(--red-200))',
        'primary-300': 'rgb(var(--red-300))',
        'primary-400': 'rgb(var(--red-400))',
        'primary-500': 'rgb(var(--red-500))',
        'primary-600': 'rgb(var(--red-600))',
        'primary-700': 'rgb(var(--red-700))',
        'primary-800': 'rgb(var(--red-800))',
        'primary-900': 'rgb(var(--red-900))',
        'primary-950': 'rgb(var(--red-950))',

        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))'
      },
      aspectRatio: {
        '6/4': '6 / 4',
      },
    }
  },
  plugins: [],
}

