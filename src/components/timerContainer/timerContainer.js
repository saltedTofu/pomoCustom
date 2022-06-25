import Settings from './settings/settings'
import StartButton from './startButton/startButton';
import RunningTimer from './runningTimer/runningTimer';
import ProgressBar from './progressBar/progressBar';
import EmbedYoutube from './embedYoutube/embedYoutube';
import Paper from '@mui/material/Paper';
import './timerContainer.css';

function TimerContainer() {
    return (
      <div className="TimerContainer">
        <div id="inputAndTimer" elevation={2}>
          <div id="settingsAndStart">
            <Settings />
            <StartButton />
          </div>
          <RunningTimer />
        </div>
        <ProgressBar />
        <EmbedYoutube />
      </div>
    );
  }
  
  export default TimerContainer;