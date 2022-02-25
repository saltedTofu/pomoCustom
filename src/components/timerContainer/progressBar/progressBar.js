import {useSelector} from 'react-redux';
import './progressBar.css';

function ProgressBar() {
  const percentComplete = useSelector(state => state.percentComplete);

    return (
      <svg className="ProgressBar" width="600px" height="50px">
        <path id="curve" d="M 25 25 L 575 25 Z" stroke="white"></path>
        <circle id="dot" r="10" cx={25+(5.5*percentComplete)} cy="25"></circle>
      </svg>
    );
  }
  
  export default ProgressBar;