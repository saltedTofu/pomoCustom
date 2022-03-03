import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../actions/index';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './title.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import Link from '@mui/material/Link';

function Title() {
  const theme = useSelector(state => state.theme);
  const [about,setAbout] = useState(false);
  const [display,setDisplay] = useState('none');

  const dispatch = useDispatch();
  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
  }
  const handleAbout = () => {
    setAbout(!about);
    if(display=="none"){
      setDisplay('block');
    }
    else{
      setDisplay('none');
    }
  }
  const MyComponent = React.forwardRef((props, ref) => {
    return (
        <Paper sx={{display: display}} id="aboutSection" ref={ref} {...props}>
          <Typography>
            Pomodoro (Italian for tomato) is a study technique that takes advantage of switching between work periods and break  periods to maximize focus and minimize distractions. The timer below allows you to customize the length of your work and rest intervals and set the total number of rounds. The typical breakdown is 4 rounds with 25 minute work periods followed by 5-10 minute break periods. 
          </Typography>
          <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">Learn More about Pomodoro</Link>
          <Typography>
            Pick a theme that fits your study mood, and you can also copy and paste a YouTube URL at the bottom of the page to embed whatever kind of videos help you study, (I’m a big fan of Lofi music streams personally). Happy Studying!
          </Typography>
        </Paper>
    );
  })
  
  return (
    <div className="Title">
      <Typography variant="h1" color="textPrimary" mt={1} mb={3}>pomodoro</Typography>
      <Button sx={{fontSize:"1rem"}} variant="contained" onClick={()=>{handleAbout()}}>about</Button>
      <Zoom in={about}>
        <MyComponent />
      </Zoom>
      <ToggleButtonGroup 
        id="themeButtons"
        exclusive
        color="primary"
        onChange={e=>handleThemeChange(e.target.value)}
        variant="contained"
        value={theme}
      >
        <ToggleButton value="dark">dark</ToggleButton>
        <ToggleButton value="lofi">lofi</ToggleButton>
        <ToggleButton value="christmas">christmas</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Title;