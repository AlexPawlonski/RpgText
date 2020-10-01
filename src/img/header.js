import React from 'react';
import load from './load.png';
import sav from './save.png';


class Header extends React.Component{
    
    mute = () =>{
        if (this.state.mute == "on") {
            this.setState({
                mute: "off"
            }) 
        }else{
            this.setState({
                mute: "on"
            })
        }
    }
    <Music save={this.state.save} volume={this.state.mute} fMute={this.mute} />



    render(){
        return(
            <header>
                
                <h1>Bienvenu dans RpgTexter</h1>
                <div id="btn">
                    
                    <img onClick={this.props.fLoadSav} className='log' src={load}/>
                    <img onClick={this.props.fInitSav} className='log' src={sav}/>
                </div>
                </header>
        );
    }
}

export default Header;