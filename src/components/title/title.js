import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '../../actions/index';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './title.css';
import { Typography } from '@mui/material';

function Title() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
  }
  return (
    <div className="Title">
      <Typography variant="h2" color="textPrimary" mt={1} mb={3}>pomodoro</Typography>
      <Button variant="contained">About</Button>
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