import {useSelector} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './runningTimer.css';

function RunningTimer() {
  const currentPhase = useSelector(state => state.currentPhase);
  const rounds = useSelector(state => state.rounds);
  const workTimer = useSelector(state => state.workTimer);
  const theme = useSelector(state => state.theme);
 
    return (
      <Paper className="RunningTimer" elevation={24}>
          <div id="timers">
            <Paper sx={{padding:"1%"}} elevation={10}>
              <Typography className="timerOutputs" id="roundTag" variant="h3">round 1</Typography>
            </Paper>
            <Paper sx={{padding:"1%"}} elevation={10}>
              <Typography className="timerOutputs" id="runningTimerOutput" variant="h1">{`${workTimer}:00`}</Typography>
            </Paper>
            <Paper sx={{padding:"1%"}} elevation={10}>
              <Typography className="timerOutputs" id="currentPhaseTag" variant="h3">{currentPhase}ing...</Typography>
            </Paper>
          </div>
          <div id="checkBoxes">
            <Checkbox name="disableAlarm" id="alarmCheckbox"/>
              <Typography htmlFor="disableAlarm">mute</Typography>
          </div>
      </Paper>
    );
  }
  
  export default RunningTimer;