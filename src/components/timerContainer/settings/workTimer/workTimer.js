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
    if (value === '' || re.test(value)) {
      dispatch(typeWork(parseInt(value,10)));
    }
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