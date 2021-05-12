module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {

      backgroundImage: theme => ({
        'sign-box': "url('/images/background.jpeg')",
        
       }),

      colors: {
        hasobgray: '#d9e1e4',
        divider: '#bfc7ca',
        grayish: '#6c6d6f',
        hasobred: '#ec474e',
        dashgray: '#c5c5c5',
        assetsbox: '#c73a40',
        assignedbox: '#feae69',
        unassignedbox: '#fc749a',
        vendorsbox: '#e2e6e9',
        locationsbox: '#a7d1e9',
        usersbox: '#d06867',
        notifybox: '#fe0000',
        iconblue: '#3a4db6',
        twitterblue: '#3596cd',
        
      }
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    }
  },
  plugins: [],
}
