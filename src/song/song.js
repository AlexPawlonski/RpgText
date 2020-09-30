import React from 'react';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

class Music extends React.Component {
    
    render() {
        if(this.props.volume == 'off'){
            return (
                <img onClick={this.props.fMute()} id='iconsong' src={icon2}/>
            );
        }else if(this.props.volume == 'on'){
            return (
                <img onClick={this.props.fMute()} id='iconsong' src={icon1}/>
            );
        } 
    }
  }
  
  export default Music;