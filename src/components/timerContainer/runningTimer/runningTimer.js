import {useSelector} from 'react-redux';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import './runningTimer.css';

function RunningTimer() {
  const currentPhase = useSelector(state => state.currentPhase);
  const rounds = useSelector(state => state.rounds);
  const workTimer = useSelector(state => state.workTimer);
  const theme = useSelector(state => state.theme);
 
    return (
      <Paper className="RunningTimer" elevation={10}>
   
          <h2 id="roundTag" elevation={24}>Round: 1</h2>
          <h2 id="currentPhaseTag" elevation={24}>{currentPhase}ing...</h2>
          <h2 id="runningTimerOutput" elevation={24}>{`${workTimer}:00`}</h2>
     
        
        <div id="checkBoxes">
          <div>
            <Checkbox name="disableAlarm" id="alarmCheckbox"/>
              <label htmlFor="disableAlarm">mute alarm</label>
          </div>
          
        </div>
      </Paper>
    );
  }
  
  export default RunningTimer;