import {useSelector, useDispatch} from 'react-redux';
import {changeToWork,changeToRest,setPercent,resetPercent, switchButtons} from '../../../actions/index';
import alarmSound from '../../../utils/alarm.wav';
import Button from '@mui/material/Button';
import './startButton.css';

let ding = new Audio(alarmSound);


function StartButton() { 
  let start=0;
  let endDate=0;
  let totalTime=0;
  const workTimer = useSelector(state => state.workTimer);
  const restTimer = useSelector(state => state.restTimer);
  const rounds = useSelector(state => state.rounds);
  const theme = useSelector(state => state.theme);
  const buttonStatus = useSelector(state => state.buttonStatus);
  const dispatch = useDispatch();

  const startPomodoro = (totalSeconds, roundsLeft) => {
    dispatch(resetPercent());
    dispatch(switchButtons());
    start = Date.now();
    endDate=Date.now()+(((workTimer*60)+(restTimer*60))*rounds)*1000; //end date in ms
    totalTime = endDate-start; //total time in ms for all rotations
    startWorkTimer(totalSeconds, roundsLeft, Date.now()+((workTimer*60)*1000));
  }
  const startWorkTimer = (totalSeconds,roundsLeft,end) => {
    let current = Date.now();//current time in ms
    let distanceInSeconds = ((end-current)/1000); //time left in seconds
    let minutes = Math.trunc(distanceInSeconds/60);
    let percentComplete = (current-start)/totalTime;
    dispatch(setPercent(percentComplete));
    if(minutes<0){
      minutes=0;
    }
    let seconds = Math.trunc(distanceInSeconds-(minutes*60));
    if(seconds<0){
      seconds=0;
    }
    document.getElementById('roundTag').innerHTML=`round ${rounds-roundsLeft+1}`;
    if(seconds<10){
      document.title = `Work ${minutes}:0${seconds}`;
    }
    else{
      document.title = `Work ${minutes}:${seconds}`;
    }
    let outputString='';
    if(minutes<10){
      if(seconds<10){
        outputString=`0${minutes}:0${seconds}`;
      }
      else{
        outputString=`0${minutes}:${seconds}`;
      }
    }
    else{
      if(seconds<10){
        outputString=`${minutes}:0${seconds}`;
      }
      else{
        outputString=`${minutes}:${seconds}`;
      }
    }
    document.getElementById("runningTimerOutput").innerHTML = outputString;
    return new Promise((resolve) => {
      setTimeout(resolve, 10);
    })
    .then(()=>{
      if(end-current<=0){
        if(document.querySelector('#alarmCheckbox').checked!==true){
          ding.play();
        }
        dispatch(changeToRest());
        startRestTimer(restTimer*60,roundsLeft,Date.now()+((restTimer*60)*1000));
      }
      else{
        startWorkTimer(totalSeconds-1,roundsLeft,end);
      }
    })
  }

  const startRestTimer = (totalSeconds,roundsLeft,end) =>{
    let current = Date.now();//current time in ms
    let distanceInSeconds = ((end-current)/1000); //time left in seconds
    let minutes = Math.trunc(distanceInSeconds/60);
    let percentComplete = (current-start)/totalTime;
    dispatch(setPercent(percentComplete));
    if(minutes<0){
      minutes=0;
    }
    let seconds = Math.trunc(distanceInSeconds-(minutes*60));
    if(seconds<0){
      seconds=0;
    }
    if(seconds<10){
      document.title = `Rest ${minutes}:0${seconds}`;
    }
    else{
      document.title = `Rest ${minutes}:${seconds}`;
    }
    let outputString='';
    if(minutes<10){
      if(seconds<10){
        outputString=`0${minutes}:0${seconds}`;
      }
      else{
        outputString=`0${minutes}:${seconds}`;
      }
    }
    else{
      if(seconds<10){
        outputString=`${minutes}:0${seconds}`;
      }
      else{
        outputString=`${minutes}:${seconds}`;
      }
    }
    document.getElementById("runningTimerOutput").innerHTML = outputString;
    return new Promise((resolve) => {
      setTimeout(resolve, 10);
    })
    .then(()=>{
      if(end-current<=0){
        if(document.querySelector('#alarmCheckbox').checked!==true){
          ding.play();
        }
        dispatch(changeToWork());
        if(roundsLeft===1){
          //document.title='finished!';
          //document.getElementById("runningTimerOutput").innerHTML ='finished!';
          document.getElementById('roundTag').innerHTML='';
          document.getElementById("startButton").disabled = false;
          return;
        }
        else{
          startWorkTimer(workTimer*60,roundsLeft-1,Date.now()+((workTimer*60)*1000));
        }
      }
      else{
        startRestTimer(totalSeconds-1,roundsLeft,end);
      }
    })
  }
  const stopTimer = () => { 
    window.location.reload();
  }
    return (
      <div className="StartButton">
        <Button disabled = {buttonStatus} variant="contained" id="startButton" onClick={() => {startPomodoro(workTimer*60,rounds)}}>start</Button>
        <Button variant="contained" id="stopButton" onClick={() => {stopTimer()}}>reset</Button>
      </div>
    );
  }
  
  export default StartButton;