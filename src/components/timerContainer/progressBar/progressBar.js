import {useSelector} from 'react-redux';
import './progressBar.css';
import Tomato from '../../../utils/tomato.png';
import Snowball from '../../../utils/snowball.png';
import Cat from '../../../utils/cat.png';
import Pig from '../../../utils/pig.png';
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
     setIcon(Cat);
  
    }
    else if(theme==='christmas'){
      setIcon(Snowball)
    }
    else if(theme==='millenial pink'){
      setIcon(Pig);
    }
  },[theme])

    return (
        <svg width="660px" height="200px" id="progressBar">
          <path id="curve" d="M 60 100 L 610 100 Z" stroke="white"></path>
          <image id="character" href={icon} width="200px" height="200px" x={(550*percentComplete)} y="0" transform={`rotate(${percentComplete*3600}, ${100+(percentComplete*550)}, 100)`}></image>
        </svg>
    );
  }
  
  export default ProgressBar;