module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary': '#007bff',
            'secondary': '#6c757d',
            'light': '#f8f9fa',
            'dark': '#343a40',
          },
          fontFamily: {
            'sans': ['Roboto', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
