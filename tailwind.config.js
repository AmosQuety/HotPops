/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hotpops-primary": "#FF5733", // Example: A bright orange (adjust to match your branding)
        "hotpops-secondary": "#3498DB", // Example: A vibrant blue
        "hotpops-accent": "#F1C40F", // Example: A sunny yellow
        "hotpops-gray": "#6B7280", // Gray color for text/background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Or another modern, readable font
        display: ["Poppins", "sans-serif"], // For headings, bolder impact
      },
      //Add custom spacing variables
      spacing: {
        "hotpops-spacing-sm": "0.5rem",
        "hotpops-spacing-md": "1rem",
        "hotpops-spacing-lg": "2rem",
        "hotpops-spacing-xl": "4rem",
      },
      boxShadow: {
        "hotpops-shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.1)",
        "hotpops-shadow-md": "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        "hotpops-radius-sm": "0.25rem",
        "hotpops-radius-md": "0.5rem",
        "hotpops-radius-lg": "0.75rem",
      },
    },
  },
  plugins: [],
};
