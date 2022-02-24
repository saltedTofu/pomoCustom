import Settings from './settings/settings'
import StartButton from './startButton/startButton';
import RunningTimer from './runningTimer/runningTimer';
import ProgressBar from './progressBar/progressBar';
import EmbedYoutube from './embedYoutube/embedYoutube';
import './timerContainer.css';

function TimerContainer() {
    return (
      <div className="TimerContainer">
        <Settings />
        <StartButton />
        <RunningTimer />
        <ProgressBar />
        <EmbedYoutube />
      </div>
    );
  }
  
  export default TimerContainer;