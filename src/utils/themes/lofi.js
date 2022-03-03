import { createTheme } from '@mui/material/styles';

const lofi = createTheme({
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
    }
},
  palette: {
    mode:"dark",
    background:{
      paper:'#673ab7' //purple
    },
    text: {
      primary:'#fafafa', //white
      secondary: '#fafafa'
    },
    primary: { //color of buttons, checkbox
      light: '#88ffff',
      main: '#4dd0e1', //light blue
      dark: '#009faf',
      contrastText: '#121212', //white
    },
    secondary: { 
      light: '#9a67ea',
      main: '#673ab7', //purple
      dark: '#320b86',
      contrastText: '#fafafa', //white
    }
  },
});

export default lofi;