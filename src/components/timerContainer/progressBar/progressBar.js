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
  const [stroke,setStroke] = useState('#fafafa');

  useEffect(()=>{
    if(theme==='dark'){
      setIcon(Tomato);
      setStroke('#fafafa'); //white
     
    }
    else if(theme==='lofi'){
     setIcon(Cat);
     setStroke('#4fc3f7'); //light blue
    }
    else if(theme==='christmas'){
      setIcon(Snowball);
      setStroke('#fafafa'); //white
    }
    else if(theme==='millenial pink'){
      setIcon(Pig);
      setStroke('#e4a199'); //brown
    }
  },[theme])

    return (
        <svg width="760px" height="250px" id="progressBar">
          <path id="curve" d="M 105 125 L 655 125 Z" stroke={stroke}></path>
          <image id="character" href={icon} width="200px" height="200px" x={(550*percentComplete)} y="25" transform={`rotate(${percentComplete*3600}, ${100+(percentComplete*550)}, 125)`}></image>
        </svg>
    );
  }
  
  export default ProgressBar;