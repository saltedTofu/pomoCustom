import { createTheme } from '@mui/material/styles';
//https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=388E3C&primary.color=d50000&secondary.text.color=FAFAFA
const christmas = createTheme({
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
    background:{
      paper:'#388e3c', //green
    },
    text: {
      primary:'#fafafa' //white
    },
    primary: { //color of buttons, checkbox
      light: '#ff6f60',
      main: '#e53935', //red
      dark: '#ab000d',
      contrastText: '#fafafa', //white
    },
    secondary: { //green
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#fafafa',
    }
  },
});

export default christmas;