import {useState} from 'react';
import {useSelector} from 'react-redux';
import TextField from '@mui/material/TextField';
import './embedYoutube.css';

function EmbedYoutube() {

  const [source,setSource] = useState('');
  const theme = useSelector(state => state.theme);

  const handleChange = (initialURL) => {
    let embedID = [];
    for(let i=initialURL.length-1;i>initialURL.length-12;i--){ //grabs embed ID from end of url
      embedID.unshift(initialURL[i]);
    }
    embedID=embedID.join('');
    console.log(embedID);
    setSource(`https://www.youtube.com/embed/${embedID}`);
  }
    return (
      <div className="embedYoutube">
        <TextField 
          
          id="videoURL" 
          type="text" 
          onChange={event => handleChange(event.target.value)} 
          label="Embed Youtube Link Here" 
          variant="outlined" />
        <iframe 
          id="youtubeEmbed"
          width="560"
          height="315"
          src={source}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    );
  }
  
  export default EmbedYoutube;