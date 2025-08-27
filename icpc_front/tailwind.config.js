/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        legend: "#6d3bbe",
      },
      animation: {
        'infinite-scroll-y': 'infinite-scroll-y 25s linear infinite',
        'infinite-scroll-x': 'infinite-scroll-x 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-164%)' },
        },
        'infinite-scroll-x': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'dotted-gradient-line': 'linear-gradient(to right, #f1f1f1 10%, rgba(255, 255, 255, 0) 0%)',
      },
      backgroundSize: {
        'dotted-size': '10px 1px',
      },
      backgroundPosition: {
        'dotted-pos': 'top',
      },
      backgroundRepeat: {
        'repeat-x': 'repeat-x',
      },
    },
  },
  plugins: [],
};
