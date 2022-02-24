import { createTheme } from '@mui/material/styles';
//https://material.io/resources/color/#!/?view.left=0&view.right=0&secondary.color=388E3C&primary.color=d50000&secondary.text.color=FAFAFA
const christmas = createTheme({
  palette: {
    mode:"dark",
    background:{
      paper:'#d50000', //red
    },
    text: {
      primary:'#fafafa' //white
    },
    primary: {
      light: '#ff5131',
      main: '#d50000', //red
      dark: '#9b0000',
      contrastText: '#fafafa', //white
    },
    secondary: {
      light: '#6abf69',
      main: '#388e3c',
      dark: '#00600f',
      contrastText: '#fafafa',
    }
  },
});

export default christmas;