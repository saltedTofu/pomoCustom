import workTimer from './workTimer';
import restTimer from './restTimer';
import rounds from './rounds';
import currentPhase from './currentPhase';
import percentComplete from './percentComplete';
import theme from './theme';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    workTimer,
    restTimer,
    rounds,
    currentPhase,
    percentComplete,
    theme
});

export default rootReducer;