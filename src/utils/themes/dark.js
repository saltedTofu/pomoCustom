import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    palette: {
        mode:"dark",
        text: {
            primary:'#fafafa', //white
        },
        primary: {
            light: '#ffffff',
            main: '#fafafa', //white
            dark: '#c7c7c7',
            contrastText: '#673ab7',
        },
        secondary: {
            light: '#484848',
            main: '#212121',
            dark: '#000000',
            contrastText: '#fafafa',
        }
    },
});

export default dark;