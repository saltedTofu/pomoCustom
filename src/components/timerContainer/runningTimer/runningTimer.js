import {useSelector} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './runningTimer.css';
import RoundAndPhase from '../roundAndPhase/roundAndPhase';

function RunningTimer() {
  const currentPhase = useSelector(state => state.currentPhase);
  const rounds = useSelector(state => state.rounds);
  const workTimer = useSelector(state => state.workTimer);
  const theme = useSelector(state => state.theme);
 
    return (
      <Paper className="RunningTimer" elevation={10}>
        <RoundAndPhase />
        <Typography  id="runningTimerOutput" variant="h1">{`${workTimer}:00`}</Typography>
      </Paper>
    );
  }
  
  export default RunningTimer;