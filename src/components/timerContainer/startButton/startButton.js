import {useSelector, useDispatch} from 'react-redux';
import {changeToWork,changeToRest,incrementPercent} from '../../../actions/index';
import alarmSound from '../../../utils/alarm.wav';
import Button from '@mui/material/Button';
import './startButton.css';

let ding = new Audio(alarmSound);

function StartButton() {
  const workTimer = useSelector(state => state.workTimer);
  const restTimer = useSelector(state => state.restTimer);
  const rounds = useSelector(state => state.rounds);
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleProgressBar = (workTimer,restTimer,rounds,repeats=100) => {
    if(repeats===0){
      return;
    }
    let totalTimeMS = ((workTimer+restTimer)*60) * (rounds * 1000);
    let incrementInterval = totalTimeMS/100;
    return new Promise((resolve) => {
      setTimeout(resolve, incrementInterval);
    })
    .then(()=>{
      dispatch(incrementPercent());
      handleProgressBar(workTimer,restTimer,rounds,repeats-1);
    })
  }

  const startPomodoro = (totalSeconds, roundsLeft) => {
    document.getElementById("startButton").disabled = true;
    startWorkTimer(totalSeconds, roundsLeft);
  }
  const startWorkTimer = (totalSeconds,roundsLeft) => {
    document.getElementById('roundTag').innerHTML=`Round: ${rounds-roundsLeft+1}`;
    document.getElementById('currentPhaseTag').innerHTML='Working...';
    let minutesOutput = Math.floor(totalSeconds/60);
    let secondsOutput = totalSeconds%60;
    if(secondsOutput<10){
      document.title = `Work ${minutesOutput}:0${secondsOutput}`;
    }
    else{
      document.title = `Work ${minutesOutput}:${secondsOutput}`;
    }
    let outputString='';
    if(minutesOutput<10){
      if(secondsOutput<10){
        outputString=`0${minutesOutput}:0${secondsOutput}`;
      }
      else{
        outputString=`0${minutesOutput}:${secondsOutput}`;
      }
    }
    else{
      if(secondsOutput<10){
        outputString=`${minutesOutput}:0${secondsOutput}`;
      }
      else{
        outputString=`${minutesOutput}:${secondsOutput}`;
      }
    }
    document.getElementById("runningTimerOutput").innerHTML = outputString;
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
    .then(()=>{
      if(totalSeconds===0){
        if(document.querySelector('#alarmCheckbox').checked!==true){
          ding.play();
        }
        dispatch(changeToRest());
        startRestTimer(restTimer*60,roundsLeft);
      }
      else{
        startWorkTimer(totalSeconds-1,roundsLeft);
      }
    })
  }

  const startRestTimer = (totalSeconds,roundsLeft) =>{
    let minutesOutput = Math.floor(totalSeconds/60);
    let secondsOutput = totalSeconds%60;
    if(secondsOutput<10){
      document.title = `Rest ${minutesOutput}:0${secondsOutput}`;
    }
    else{
      document.title = `Rest ${minutesOutput}:${secondsOutput}`;
    }
    let outputString='';
    if(minutesOutput<10){
      if(secondsOutput<10){
        outputString=`0${minutesOutput}:0${secondsOutput}`;
      }
      else{
        outputString=`0${minutesOutput}:${secondsOutput}`;
      }
    }
    else{
      if(secondsOutput<10){
        outputString=`${minutesOutput}:0${secondsOutput}`;
      }
      else{
        outputString=`${minutesOutput}:${secondsOutput}`;
      }
    }
    document.getElementById("runningTimerOutput").innerHTML = outputString;
    document.getElementById('currentPhaseTag').innerHTML='Resting...';
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
    .then(()=>{
      if(totalSeconds===0){
        if(document.querySelector('#alarmCheckbox').checked!==true){
          ding.play();
        }
        dispatch(changeToWork());
        if(roundsLeft===1){
          document.title='Timer Done';
          document.getElementById("runningTimerOutput").innerHTML ='Timer Done';
          document.getElementById('roundTag').innerHTML='';
          document.getElementById('currentPhaseTag').innerHTML='';
          document.getElementById("startButton").disabled = false;
          return;
        }
        else{
          startWorkTimer(workTimer*60,roundsLeft-1);
        }
      }
      else{
        startRestTimer(totalSeconds-1,roundsLeft);
      }
    })
  }
  const stopTimer = () => { 
    window.location.reload();
  }
    return (
      <div className="StartButton">
        <Button variant="contained" id="startButton" onClick={() => {startPomodoro(workTimer*60,rounds); handleProgressBar(workTimer,restTimer,rounds)}}>Start</Button>
        <Button variant="contained" id="stopButton" onClick={() => {stopTimer()}}>Reset</Button>
      </div>
    );
  }
  
  export default StartButton;