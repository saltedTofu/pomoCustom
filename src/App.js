import './App.css';
import Title from './components/title/title';
import TimerContainer from './components/timerContainer/timerContainer';
import {useSelector} from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import lofiTheme from './utils/themes/lofi.js';
import darkTheme from './utils/themes/dark.js';
import christmasTheme from './utils/themes/christmas.js';
import millenialPinkTheme from './utils/themes/millenialPink.js';
import Box from '@mui/material/Box';

function App() {
  const theme = useSelector(state => state.theme);

  const changeTheme = () => {
    if(theme==='lofi'){
      return lofiTheme;
    }
    else if(theme==='dark'){
      return darkTheme;
    }
    else if(theme==='christmas'){
      return christmasTheme;
    }
    else if(theme==='millenial pink'){
      console.log(millenialPinkTheme);
      return millenialPinkTheme;
    }
  }

  const changeBg = () =>{
    if(theme==='lofi'){
      return '#320b86'; //purple
    }
    else if(theme==='dark'){
      return '#212121'; //black
    }
    else if(theme==='christmas'){
      return '#00600f'; //green
    }
    else if(theme==='millenial pink'){
      return '#ffd1dc'; //pink
    }
  }

  return (
    <ThemeProvider theme={changeTheme()}>
      <Box className="App" bgcolor={changeBg()}>
        <Title />
        <TimerContainer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
