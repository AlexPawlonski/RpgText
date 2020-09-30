import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Moteur from './Class/moteur.js'
import Image from './img/image.js'
//import Music from './song/song.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            result: "",
            save: 0,
            //mute: 'off',
        }
    }
/*
    initSav = () => {
        var save = this.state.save
        var name = this.state.name
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "php/Model.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("save=" + escape(save) + "name=" + escape(name));
    }

*/
    envoi = (e) =>{
        console.log(this.state.save);
        
        /*if(this.state.save == 0){
            this.loadDoc()
        }else{*/
            var input = e.newItemValue.toString()
            if(this.state.name == ""){
                this.setState({
                    name: input,
                    result: input,
                })
            }else{
                this.setState({
                    result: input,
                })   
            }
        /*}*/
        
             
    };

    save = (e)=>{
        var inputSave = parseInt(e.save.toString());
        if(e){
            console.log(inputSave);
            this.setState({
                save: this.state.save+inputSave
            })
        }
    }
/*
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
*/
    render() {
        return (
            <div id="wrapper">
                <h1>Bienvenu dans RpgTexter</h1> 
                <section id ="main">
                    <Image save={this.state.save}/>
                    <Moteur fSave = {this.save} result = {this.state.result} name = {this.state.name} save={this.state.save}/>
                </section>
                <Input envoi = {this.envoi} />
                
            </div> 
        );
    }
} 


class Input extends React.Component{

    onPush = (event) => {
        if(event.keyCode == 13){
            var newItemValue = this.refs.inputName.value;
            this.props.envoi({newItemValue}) 
            this.refs.inputName.value = '';
        }
    }
    render(){
        return(
            <div>
                <label>=></label>
                <input id="input" ref="inputName" onKeyDown={this.onPush}></input> 
            </div>
        );
    }
}


ReactDOM.render( <App />, document.getElementById('root'));
