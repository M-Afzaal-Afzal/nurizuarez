import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 375,
            md: 768,
            lg: 1200,
            xl: 1400,
        }
    },
        palette: {
            primary: {
                light: 'rgba(110, 0, 240, 1)',
                main: 'rgba(98, 0, 214, 1)',
                dark: 'rgba(61, 0, 133, 1)',
            },
            secondary: {
                main: '#f72585',
            },
            error: {
                main: red.A400,
            },
            common: {
                main: 'rgba(0, 0, 0, 1)',
            },
            grey: {
              main: "rgba(255, 255, 255, 1)",
            },
        },
    typography: {
        fontFamily: [
            '"Roboto Slab"',
            '"Open Sans"',
            'sans-serif',
        ].join(','),
        color: 'rgba(0, 0, 0, 1)',
        button: {
            fontFamily: '"Open Sans"',
            fontSize: "1rem",
            // lineHeight: '77px',
        },
        body1: {
            fontFamily: '"Open Sans"',
        },
        h1:{
            fontFamily: '"Roboto Slab"',
            fontSize: '66px',
            color: 'rgba(0, 0, 0, 1)',
        }
    },
    });

export default theme;
