import WorkTimer from './workTimer/workTimer';
import RestTimer from './restTimer/restTimer';
import Rounds from './rounds/rounds';
import {useSelector} from 'react-redux';
import Paper from '@mui/material/Paper';
import './settings.css'

function Settings() {
  const theme = useSelector(state => state.theme);

    return (
      <Paper className="Settings" elevation={10}>
          <WorkTimer />
          <RestTimer />
          <Rounds />
      </Paper>
    );
  }
 
  export default Settings;