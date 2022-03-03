import WorkTimer from './workTimer/workTimer';
import RestTimer from './restTimer/restTimer';
import Rounds from './rounds/rounds';
import {useSelector, useDispatch} from 'react-redux';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {incrementWork, decrementWork, incrementRest, decrementRest, incrementRounds, decrementRounds} from '../../../actions/index'
import './settings.css'

function Settings() {
  const theme = useSelector(state => state.theme);
  const workTimer = useSelector(state => state.workTimer);
  const restTimer = useSelector(state => state.restTimer);
  const buttonStatus = useSelector(state => state.buttonStatus);
  const dispatch = useDispatch();

    return (
      <Paper sx={{marginTop:".8%"}}className="Settings" elevation={24}>
          <div className="outerTimer">
            <WorkTimer />
            <div className="arrows">
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(incrementWork())}} aria-label="increase">
                <ArrowUpwardIcon/>
              </IconButton>
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(decrementWork())}} aria-label="decrease">
                <ArrowDownwardIcon/>
              </IconButton>
            </div>
          </div>
          <div className="outerTimer">
            <RestTimer />
            <div className="arrows">
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(incrementRest())}} aria-label="increase">
                <ArrowUpwardIcon/>
              </IconButton>
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(decrementRest())}} aria-label="decrease">
                <ArrowDownwardIcon/>
              </IconButton>
            </div>
          </div>
          <div className="outerTimer">
            <Rounds />
            <div className="arrows">
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(incrementRounds())}} aria-label="increase">
                <ArrowUpwardIcon/>
              </IconButton>
              <IconButton size="large" disabled={buttonStatus} onClick={() => {dispatch(decrementRounds())}} aria-label="decrease">
                <ArrowDownwardIcon/>
              </IconButton>
            </div>
          </div>
      </Paper>
    );
  }
 
  export default Settings;