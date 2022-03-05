import {useSelector, useDispatch} from 'react-redux';
import {typeWork} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './workTimer.css';

function WorkTimer() {
  const timer = useSelector(state => state.workTimer);
  const buttonStatus = useSelector(state => state.buttonStatus);
  const dispatch = useDispatch();
  
  const handleNumberInput = (value) => {
    //regex for using only positive whole numbers
    const re = /^[0-9\b]+$/;
    if(value[0]=='0'){ //chops off leading zero
      value = value.substring(1);
    }
    if(parseInt(value,10)>99){
      value = '99';
      dispatch(typeWork(99));
      //error message for value greater than 99
    }
    if (value === '' || re.test(value)) {
      if(value==''){
        dispatch(typeWork(0));
      }
      else{
        dispatch(typeWork(parseInt(value,10)));
      }
    }
    document.getElementById('workInput').value=value;
  }
    return (
      <div className="WorkTimer">
        <Typography variant="h5">work</Typography>
        <TextField
          disabled={buttonStatus}
          type="number" 
          id="workInput" 
          value={timer} 
          onChange={e=>handleNumberInput(e.target.value)}
        ></TextField>
      </div>
    );
  }
  
  export default WorkTimer;