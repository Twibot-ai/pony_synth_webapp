import React from 'react';

const AudioComponent = (props) => {
  return (
    <audio controls="controls" >
      <source src={props.audio_url}/>
      {'Your browser does not support the audio element.'}
    </audio>
  );
};
export default AudioComponent;
