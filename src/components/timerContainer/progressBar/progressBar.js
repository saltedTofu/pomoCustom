import {useSelector} from 'react-redux';
import './progressBar.css';
import Tomato from '../../../utils/tomato.png';
import Snowball from '../../../utils/snowball.png';
import { useEffect, useState } from 'react';

function ProgressBar() {
  const percentComplete = useSelector(state => state.percentComplete);
  const theme = useSelector(state => state.theme);
  const [icon,setIcon] = useState(Tomato);
  useEffect(()=>{
    if(theme==='dark'){
      setIcon(Tomato);
    }
    else if(theme==='lofi'){
     setIcon(Tomato);
    }
    else if(theme==='christmas'){
      setIcon(Snowball);
    }
  },[theme])

    return (
      <svg className="ProgressBar" width="660px" height="200px">
        <path id="curve" d="M 60 100 L 610 100 Z" stroke="white"></path>
        <image id="character" href={icon} width="100" height="100" x={(550*percentComplete)} y="50"></image>
      </svg>
    );
  }
  
  export default ProgressBar;