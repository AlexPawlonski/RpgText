import React from 'react';
class Moteur extends React.Component{
    render(){
        //Question Début 
        if(this.props.save == 0){
            if(this.props.name == "" ){ 
                return(
                    <ul>
                        <li>Enter votre nom : </li>
                    </ul>
                );
            }else{

                let name = this.props.name;
                let input = this.props.result

                let index = ['yes', 'oui']
                index.forEach(element => {
                    if(input.includes(element)){
                        let save = 1;
                        this.props.fSave({save}); 
                    }
                });

                let indexno = ['no', 'nom','nop']
                indexno.forEach(element => {
                    if(input.includes(element)){
                        document.location.reload(true);
                    }
                });

                return(
                    <ul>
                        <li>Bonjour <p className="Name">{name}</p>, préparer vous à entre dans Zaxarot !!</li>
                        <li>Es-bien votre nom ?</li>
                    </ul>
                );   
            }
        }
        
//event 1 -----------------------
        //Qestion 2
        if(this.props.save == 1){
            let input = this.props.result

            let index1 = ['pencher', 'penché', 'pencher', 'penché', 'penche', 'aproche', 'approche', 'approcher', 'voir', 'inpecter', 'egarder']
            index1.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index2 = ['partire', 'par', 'iniore', 'par dessu', 'iniorer', 'fuit', 'enfuie', 'fui', 'éloigne', 'écrater', 'avance', 'passe']
            index2.forEach(element => {
                if(input.includes(element)){
                    let save = 5;
                    this.props.fSave({save}); 
                }
            });
            let index3 = ['ramasser', 'prendre', 'prend','ramasse', 'rammase', 'ramase']
            index3.forEach(element => {
                if(input.includes(element)){
                    let save = 2;
                    this.props.fSave({save}); 
                }
            });

            let index14 = ['regarder','regarde', 'autoure', 'au alentoure','dans les barrage']
            index14.forEach(element => {
                if(input.includes(element)){
                    let save = 6;
                    this.props.fSave({save}); 
                }
            });

            return(
                <ul>
                    <li>Vous être dans un foret du fin fond de zaxarote.</li> 
                    <li>La lune est claire et le vent est calm, La sur un pière a vos pier ce trouve un signe.</li>
                    <li>Que fait vous ?</li>
                </ul>
            );

        }

        //Question ce pancher 
        if(this.props.save == 2){
            let input = this.props.result

            let index42 = ['toucher', 'éffleurer ', 'touche', 'oui', 'aproche', 'baise', 'approche' ]
            index42.forEach(element => {
                if(input.includes(element)){
                    let save = 2;
                    this.props.fSave({save}); 
                }
            });

            let index43 = ['nop', 'pas ', 'nom', 'ravise', 'arrète', 'éloigne', 'je ne la touche pas']
            index43.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });

            return(
                <ul>
                    <li>Vous vous pancher sur la pierre, d'un regard intérogateur.</li>
                    <li>Votre passer aussi riche fut été, ne vous permit pas d'identifier l'incription posser amème la roche.</li>
                    <li>Mais, il semblai qu'un l'éger souvenir d'un vieux livre sur l'histoire de Zaxarot vous mis en grade d'un dangers.</li>
                    <li>Mais oserer vous y toucher, malegere cette étrange lumière verdatre ?</li>
                </ul>
            );
        }

        // ramasser la pierre 
        if(this.props.save == 3){
            let input = this.props.result

            let index5 = ['oui', 'yes', 'yep' , 'je le fait ']
            index5.forEach(element => {
                if(input.includes(element)){
                    let save = -1;
                    this.props.fSave({save}); 
                }
            });
            let index6 = ['no', 'nop', 'non', 'pas']
            index6.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>En regardant la pierre, vous vous dite quelle est bien grosse pour que vous puisier la predendre.</li>
                    <li>Mais du bous des doit vous vous approcher de la pierre et une lumière un vert pale commança a y émaner,
                        soudain un susaut d'ésitation vous envahi pouriez vous au moin la toucher ? </li>
                </ul>
            );
        }

        //toucher la pierre 
        if(this.props.save == 4){
            let input = this.props.result

            let index41 = ['toucher', 'éffleurer ', 'touche', 'prend', 'jette dessus']
            index41.forEach(element => {
                if(input.includes(element)){
                    document.location.reload(true);
                }
            });

            let index42 = ['éloignier', 'fuire','cour', 'part', 'par', 'pare', 'recule']
            index42.forEach(element => {
                if(input.includes(element)){
                    
                }
            });
            return(
                <ul>
                    <li>Avec assurance vous toucher la pierre, ça lueur augementa d'un coup ! </li>
                    <li>Un peu éblouie vous vous cacher les yeux avec votre bras, surpprit vous reculer d'un pas !</li>
                    <li>Que faite vous ?</li>
                </ul>
            );

        }
        //raviser et noter 

        if(this.props.save == 5){
            let input = this.props.result

            let index8 = ['toucher', 'éffleurer ', 'touche']
            index8.forEach(element => {
                if(input.includes(element)){
                    

                }
            });
            return(
                <ul>
                    <li>Vous raviser et vous reculer d'un pas, mais pensant qu'une pierre qui brillait au fin fond d'une forait. Pouvait avoir son importance 
                        vour rercher dans votre petit packtage, un papier et un bou de charbon pour y noter les syboles inscri sur la pierre. </li>
                    <li> </li>
                    <li>Puis voulant vous rendre au plus vite au prochain village vous retourner sur le chemain principale</li>
                </ul>
            );

        }

        //Question passer son chemain 
        if(this.props.save == 6){
            let input = this.props.result

            let index9 = ['toucher', 'éffleurer ', 'touche']
            index9.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous passer votre chemain non sans un petite regettre, mais dans vos souvenir se trouvait une étrange chensation.</li>
                    <li>Mais bon apres tous une pierre qui brille au fond d'une foret, c'est rien de spécial à zaxarote. </li> 
                    <li>Vous avancer sur le chemain sombre éclairer par la lueur de la plaine lune, le vent se fesait frait. Vous vous dite que vous aurier surement du écouter votre petite maman quand elle vous à dis
                        de prendre un plus gros pull.</li>
                    
                </ul>
            );

        }
        //regarder autour de vous 
        if(this.props.save == 7){
            let input = this.props.result

            let index71 = ['pare', 'fuit', 'fui', 'éloigne', 'recule']
            index71.forEach(element => {
                if(input.includes(element)){
                    let save = -2;
                    this.props.fSave({save}); 
                }
            });
            let index9 = ['toucher', 'jète dessus', 'touche', 'approche', 'ataque']
            index9.forEach(element => {
                if(input.includes(element)){
                    let save = -3;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous être sur vos garde et vous regarder autour de vous, il n'y avais pas grand chose à votre droit un petit chemin qui ramenait a la route principale.
                        A votre gauche la foret s'étendais sur des mille mais vous d'istingé une petite clairière, surment un endroit pour faire parurer les bète.
                        Dérrier vous la foret, et devant vous la pierre, qui maintenant que vous y pérer atention, vous remarquer que cette pière resenblais a un vielle stelle polie par le temp. 
                    </li>
                    <li>Que faite vous ?</li>
                </ul>
            );

        }
        //la fuite de la pierre
        if(this.props.save == 8){
            let input = this.props.result

            let index9 = ['toucher', 'éffleurer ', 'touche']
            index9.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>vous fuyer r'apidament de l'emplacement de la la pierre, sans vous retourner vous courer dans une direction inconue, car dans votre fuite vous n'avier pas eu le temps de savoir un vous alier.
                        Par un heureux assare ou par chance vous  </li>
                </ul>
            );

        }
        







//mort 
    if(this.props.save == 1000){
        let input = this.props.result
        let index1001 = ['yes', 'oui']
        index1001.forEach(element => {
            if(input.includes(element)){
                let save = -2;
                this.props.fSave({save}); 
            }
        });

        let index1002 = ['no', 'nom','nop']
        index1002.forEach(element => {
            if(input.includes(element)){
                document.location.reload(true);
            }
        });

        return(
            <ul>
                <li>Vous être mort! vous n'avez pas sus venir a bou de Zaxarot !!</li>
                <li>voulez vous revivre ?</li>
            </ul>
        ); 
    }   

//Event erreur de compréhention 
        if(this.props.save == 404){
            return(
                <ul>
                    <li>Je n'est pas compprid reformuléer SVP ?</li> 
                </ul>
            );
        }


    };
}

export default Moteur;
