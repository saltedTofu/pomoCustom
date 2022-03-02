import {useSelector, useDispatch} from 'react-redux';
import {typeRounds} from '../../../../actions/index';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import './rounds.css';

function Rounds() {
  const rounds = useSelector(state => state.rounds);
  const buttonStatus = useSelector(state => state.buttonStatus);
  const dispatch = useDispatch();

  const handleNumberInput = (value) => {
    //regex for using only positive whole numbers
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      dispatch(typeRounds(parseInt(value,10)));
    }
  }
    return (
      <div className="Rounds">
        <Typography variant="h4">rounds</Typography>
        <TextField 
          disabled={buttonStatus}
          type="number" 
          id="roundInput" 
          value={rounds} 
          onChange={e=>handleNumberInput(e.target.value)}
        ></TextField>
      </div>
    );
  }
  
  export default Rounds;