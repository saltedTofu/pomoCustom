import {useSelector, useDispatch} from 'react-redux';
import {typeWork} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
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
        <h2>work</h2>
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