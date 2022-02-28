import {useSelector} from 'react-redux';
import './progressBar.css';
import Tomato from '../../../utils/tomato.png';

function ProgressBar() {
  const percentComplete = useSelector(state => state.percentComplete);

    return (
      <svg className="ProgressBar" width="660px" height="200px">
        <path id="curve" d="M 60 100 L 610 100 Z" stroke="white"></path>
        <image id="character" href={Tomato} width="100" height="100" x={(550*percentComplete)} y="50"></image>
      </svg>
    );
  }
  
  export default ProgressBar;