/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        noise: "url(noise.png)",
      },
      fontFamily: {
        mplus: "'M PLUS Rounded 1c', system, sans-serif",
      },
    },
  },
  plugins: [],
};
