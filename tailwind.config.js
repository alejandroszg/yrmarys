/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "service-1": "url('/assets/service-1.jpg')",
        "service-2": "url('/assets/service-2.jpg')",
        "service-3": "url('/assets/service-3.jpg')",
        "service-4": "url('/assets/service-4.jpg')",
      }),
    },
  },
  plugins: [],
};
