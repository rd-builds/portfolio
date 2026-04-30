/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0B1020',
        paper: '#0F172A',
        panel: 'rgba(18, 26, 45, 0.66)',
        line: 'rgba(148, 163, 184, 0.16)',
        cyanSoft: '#67E8F9',
        blueSoft: '#60A5FA',
        violetSoft: '#A78BFA',
      },
      boxShadow: {
        glow: '0 22px 70px rgba(96, 165, 250, 0.14)',
        card: '0 24px 80px rgba(2, 6, 23, 0.38)',
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at 20% 20%, rgba(125, 211, 252, 0.18), transparent 28%), radial-gradient(circle at 78% 12%, rgba(196, 181, 253, 0.15), transparent 26%), radial-gradient(circle at 50% 80%, rgba(99, 230, 190, 0.12), transparent 30%)',
      },
    },
  },
  plugins: [],
}
