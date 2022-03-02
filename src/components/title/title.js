import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../actions/index';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './title.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Zoom from '@mui/material/Zoom';
import image from '../../utils/tomato.png';

function Title() {
  const theme = useSelector(state => state.theme);
  const [about,setAbout] = useState(false);
  const dispatch = useDispatch();
  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
  }
  const handleAbout = () => {
    setAbout(!about);
  }
  const MyComponent = React.forwardRef((props, ref) => {
    return (
      <Card ref={ref} {...props}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Card>
    );
  })
  
  return (
    <div className="Title">
      <Typography variant="h2" color="textPrimary" mt={1} mb={3}>pomodoro</Typography>
      <Button variant="contained" onClick={()=>{handleAbout()}}>About</Button>
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
        <ToggleButton value="dark">Dark</ToggleButton>
        <ToggleButton value="lofi">Lofi</ToggleButton>
        <ToggleButton value="christmas">Christmas</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Title;