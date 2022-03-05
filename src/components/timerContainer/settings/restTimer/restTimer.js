import {useSelector, useDispatch} from 'react-redux';
import {typeRest} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './restTimer.css';

function RestTimer() {
  const timer = useSelector(state => state.restTimer);
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
      dispatch(typeRest(99));
      //error message for value greater than 99
    }
    if (value === '' || re.test(value)) {
      if(value==''){
        dispatch(typeRest(0));
      }
      else{
        dispatch(typeRest(parseInt(value,10)));
      }
    }
    document.getElementById('restInput').value=value;
  }

    return (
      <div className="RestTimer">
        <Typography variant="h5">rest</Typography>
        <TextField 
          disabled={buttonStatus}
          type="number" 
          id="restInput" 
          value={timer} 
          onChange={e=>handleNumberInput(e.target.value)}
        ></TextField>
      </div>
    );
  }
  
  export default RestTimer;