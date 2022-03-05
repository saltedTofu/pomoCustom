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
    if(value[0]=='0'){ //chops off leading zero
      value = value.substring(1);
    }
    if(parseInt(value,10)>99){
      value = '99';
      dispatch(typeRounds(99));
      //error message for value greater than 99
    }
    if (value === '' || re.test(value)) {
      if(value==''){
        dispatch(typeRounds(0));
      }
      else{
        dispatch(typeRounds(parseInt(value,10)));
      }
    }
    document.getElementById('roundInput').value=value;
  }
    return (
      <div className="Rounds">
        <Typography variant="h5">rounds</Typography>
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