import {useSelector} from 'react-redux';
import './progressBar.css';

function ProgressBar() {
  const percentComplete = useSelector(state => state.percentComplete);

    return (
      <div className="ProgressBar">
        <div id="outerProgressBar">
          <div id="innerProgressBar" style={{width:`${percentComplete}%`}}>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProgressBar;