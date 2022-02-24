import {useSelector, useDispatch} from 'react-redux';
import {typeWork} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import './workTimer.css';

function WorkTimer() {
  const timer = useSelector(state => state.workTimer);
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
        <Typography variant="h4">work</Typography>
        <TextField
          type="number" 
          id="workInput" 
          value={timer} 
          onChange={e=>handleNumberInput(e.target.value)}
        ></TextField>
      </div>
    );
  }
  
  export default WorkTimer;