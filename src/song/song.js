import React from 'react';
import song1 from './song1.mp3';
import song2 from './song2.mp3';
import icon1 from './icon1.png';
import icon2 from './icon2.png';

class Music extends React.Component {
    constructor(props){
        super(props)
        this.url={song : song1}
        this.audio = new Audio(this.url.song);
    }
    
    
    render() {
        console.log(this.url);
        if (this.props.save <= 5) {
            this.url.song = song1
        }else{
            this.url.song = song2 
        }

        if(this.props.volume == true){
            this.audio.pause();
            return (
                <img onClick={this.props.fvolume} id='iconsong' src={icon1}/>
            );
        }else{
            this.audio.play();
            return (
                <img onClick={this.props.fvolume} id='iconsong' src={icon2}/>
            );
        } 
    }
  }
  
  export default Music;