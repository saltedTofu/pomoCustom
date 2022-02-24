import { createTheme } from '@mui/material/styles';

const lofi = createTheme({
  palette: {
    mode:"dark",
    background:{
      paper:'#673ab7'
    },
    text: {
      primary:'#212121' //black
    },
    primary: {
      light: '#df78ef',
      main: '#ab47bc',
      dark: '#790e8b',
      contrastText: '#fafafa', //white
    },
    secondary: {
      light: '#ff94c2',
      main: '#f06292',
      dark: '#ba2d65',
      contrastText: '#fafafa',
    }
  },
});

export default lofi;