import {useSelector, useDispatch} from 'react-redux';
import {typeRest} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
import './restTimer.css';

function RestTimer() {
  const timer = useSelector(state => state.restTimer);
  const dispatch = useDispatch();

  const handleNumberInput = (value) => {
    //regex for using only positive whole numbers
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      dispatch(typeRest(parseInt(value,10)));
    }
  }

    return (
      <div className="RestTimer">
        <h2>rest</h2>
        <TextField 
          type="number" 
          id="restInput" 
          value={timer} 
          onChange={e=>handleNumberInput(e.target.value)}
        ></TextField>
      </div>
    );
  }
  
  export default RestTimer;