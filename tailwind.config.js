module.exports = {
  purge: [
    './components/**/*.html',
    './components/**/*.js',
    './components/**/*.jsx',
    './components/**/*.tsx'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '991px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      orange: {
        light: '#FD9D52',
        dark: '#F7883C'
      },
      magenta: {
        light: '#DD45D3',
        dark: '#C634C3'
      },
      purple: {
        light: '#943CFF',
        dark: '#7F2CF3'
      },
      blueberry: '#6A11EA',
      pink: '#ED72E2',
      gradient: 'linear-gradient(0deg, #B13CFF 0%, #DD45D3 50%, #FD9D52 100%);',
      link: '#008EFF',
      gray: {
        100: '#F8FBFC',
        200: '#EDF2F7',
        300: '#E2E8F0',
        400: '#CBD5E0',
        500: '#A0AEC0',
        600: '#718096',
        700: '#4A5568',
        800: '#2D3748',
        900: '#1A202C'
      },
      utility: {
        blue: '#0076FF',
        red: '#EF3D57',
        gold: '#FFCA28',
        green: '#72CE7B'
      }
    },
    spacing: {
      '0': '0',
      '1': '0.8rem',
      '2': '1.6rem',
      '3': '2.4rem',
      '4': '3.2rem',
      '5': '4rem',
      '6': '4.8rem',
      '7': '5.6rem',
      '8': '6.4rem',
      '9': '7.2rem',
      '10': '8rem',
      '11': '8.8rem',
      '12': '9.6rem',
      '13': '10.4rem',
      '14': '11.2rem',
      '15': '12rem'
    },
    fontFamily: {
      body: ['Plex', '-apple-system', 'Arial', 'sans-serif'],
      code: ['Plex Mono', 'monospace', 'serif']
    },
    fontSize: {
      sm: ['1.4rem', '2.4rem'],
      base: ['1.6rem', '3.2rem'],
      lg: ['1.8rem', '3.2rem'],
      xl: ['2rem', '4rem'],
      '2xl': ['2.4rem', '4rem'],
      '3xl': ['3rem', '4.8rem'],
      '4xl': ['3.6rem', '5.6rem'],
      '5xl': ['4.8rem', '7.2rem'],
      '6xl': ['6.4rem', '9.6rem']
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    letterSpacing: {
      '1': '0.1rem',
      '2': '0.2rem',
      '3': '0.3rem',
      '4': '0.4rem'
    },
    lineHeight: {
      '3': '2.4rem',
      '4': '3.2rem',
      '5': '4rem',
      '6': '4.8rem',
      '7': '5.6rem',
      '8': '6.4rem',
      '9': '7.2rem'
    },
    borderRadius: {
      '0': '0',
      '1': '0.8rem',
      '2': '1.6rem',
      '3': '2.4rem'
    },
    boxShadow: {
      base: '0px 1px 3px rgba(74, 74, 139, 0.1), 0px 1px 2px rgba(74, 74, 139, 0.06)',
      md: '0px 4px 6px rgba(74, 74, 139, 0.1), 0px 2px 4px rgba(74, 74, 139, 0.06)',
      lg: '0px 4px 6px rgba(74, 74, 139, 0.05), 0px 10px 15px rgba(74, 74, 139, 0.1)',
      xl: '0px 10px 10px rgba(74, 74, 139, 0.04), 0px 20px 25px rgba(74, 74, 139, 0.1)',
      '2xl': '0px 25px 50px rgba(74, 74, 139, 0.25)',
      inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06);'
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last']
  },
  plugins: [
    // eslint-disable-next-line func-names
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen md': {
            maxWidth: '768px'
          },
          '@screen lg': {
            maxWidth: '1140px'
          }
        },
        '.gradient-text': {
          background: 'linear-gradient(270deg, #943cff 0%, #dd45d3 50%, #fd9d52 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        },
        '.gradient-bg': {
          background: 'linear-gradient(270deg, #943cff 0%, #dd45d3 50%, #fd9d52 100%)'
        }
      });
    }
  ]
};
