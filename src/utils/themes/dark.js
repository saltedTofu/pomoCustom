import { createTheme } from '@mui/material/styles';

const dark = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize:'2.5rem',
                    fontFamily:"Roboto"
                }
            }
        }
    },
    typography:{
        button:{
            textTransform:"none"
        },
        h1:{
            fontSize:'12rem'
        }
    },
    palette: {
        mode:"dark",
        text: {
            primary:'#fafafa', //white
        },
        primary: { //color of buttons
            light: '#ffffff',
            main: '#fafafa', //white
            dark: '#c7c7c7',
            contrastText: '#212121', //black
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