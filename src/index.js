
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Moteur from './Class/moteur.js'
import Image from './img/image.js'
import Header from './img/header.js'
import * as firebase from 'firebase'
import config from './database/firebase.js'
//import Music from './song/song.js'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            save: 0, 
            result: "", 
            //mute: 'off',
        }
        firebase.initializeApp(config);
        const userRef = firebase.database().ref();
        this.messagesRef = userRef.child("player");
    }

    loadSav = () =>{
        this.messagesRef.on('value', snapshot => {
            let log;
            log = snapshot.val() ? Object.keys(snapshot.val()).map( key => {
                return snapshot.val()[key];
            }) :
            log = [];
            console.log(log);
            log.forEach(value => {
                if(value.name == this.state.name){
                    this.setState({
                        save: value.save
                    })
                    console.log(this.state.save);
                    console.log(this.state.name);
                }else{
                    console.log('nop');
                }
            });
            
        })
    }

    initSav = () => {
        const newPlayerKey = this.messagesRef.push().key;
        let updates = {};
        updates["/player/" + newPlayerKey] = {
          name: this.state.name,
          save: this.state.save
        };
        firebase
          .database()
          .ref()
          .update(updates);
          console.log(updates);
    };

    envoi = (e) =>{
        console.log(this.state.save);
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

    render() {
        return (
            <div id="wrapper">
                <Header fInitSav = {this.initSav} fLoadSav = {this.loadSav} />
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

