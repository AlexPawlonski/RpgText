import React from 'react';
import load from './img/load.png';
import sav from './img/save.png';
import Music from './song/song.js'
class Header extends React.Component{
    render(){
        return(
            <header>
                
                <h1>Bienvenu dans RpgTexter</h1>
                <div id="btn">
                    <Music fvolume ={this.props.fvolume} volume = {this.props.volume} save = {this.props.save}/>
                    <img onClick={this.props.fLoadSav} className='log' src={load}/>
                    <img onClick={this.props.fInitSav} className='log' src={sav}/>
                </div>
                </header>
        );
    }
}

export default Header;