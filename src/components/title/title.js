import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../actions/index';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './title.css';
import { Typography } from '@mui/material';
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
          <Link rel="nofollow" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" variant="h6" target="_blank" color="primary">Learn More about Pomodoro</Link>
          <Typography>
            Pick a theme that fits your study mood, and you can also copy and paste a YouTube URL at the bottom of the page to embed whatever kind of videos help you study, (I’m a big fan of Lofi music streams personally). Happy Studying!
          </Typography>
        </Paper>
    );
  })
  
  return (
    <div className="Title">
      <Typography variant="h2" color="textPrimary" mt={1} mb={3} sx={{color:'#fafafa'}}>pomodoro</Typography>
      <Button sx={{fontSize:"1rem"}} variant="contained" onClick={()=>{handleAbout()}}>about</Button>
      <Zoom in={about}>
        <MyComponent />
      </Zoom>
      <ToggleButtonGroup 
        id="themeButtons"
        exclusive
        onChange={e=>handleThemeChange(e.target.value)}
        variant="contained"
        value={theme}
      >
        <ToggleButton value="dark">dark</ToggleButton>
        <ToggleButton value="lofi">lofi</ToggleButton>
        <ToggleButton value="christmas">christmas</ToggleButton>
        <ToggleButton value="millenial pink">pink</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Title;