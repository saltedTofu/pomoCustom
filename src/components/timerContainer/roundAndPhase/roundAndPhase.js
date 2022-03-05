import {useSelector} from 'react-redux';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import './roundAndPhase.css';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';


function RoundAndPhase(){
    const currentPhase = useSelector(state => state.currentPhase);
    const [workFill,setWorkFill] = useState('outlined');
    const [restFill,setRestFill] = useState('outlined');

    useEffect(()=>{
        if(currentPhase==='work'){
            setWorkFill('filled');
            setRestFill('outlined');
        }
        else{
            setWorkFill('outlined');
            setRestFill('filled');
        }
    },[currentPhase])

    return(
        <div id="roundAndPhase">
            <Typography variant="h4" id="roundTag" >round 1</Typography>
            <Chip sx={{m:1}} size="large" label="work" variant={workFill}></Chip>
            <Chip sx={{m:1}} size="large" label="rest" variant={restFill}></Chip>
            <Checkbox name="disableAlarm" id="alarmCheckbox"/>
            <Typography htmlFor="disableAlarm">mute</Typography>
        </div>
    );
}
export default RoundAndPhase;