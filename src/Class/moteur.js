import React from 'react';
class Moteur extends React.Component{
    render(){
        //Question Début 
        if(this.props.save <= 0){
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

            let index11 = [ 'examine', 'pencher', 'penché', 'pencher', 'penché', 'penche', 'aproche', 'approche', 'approcher', 'voir', 'inpecter', 'egarder']
            index11.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index12 = ['partire', 'par', 'iniore', 'par dessu', 'iniorer', 'fuit', 'enfuie', 'fui', 'éloigne', 'écrater', 'avance', 'passe']
            index12.forEach(element => {
                if(input.includes(element)){
                    let save = 5;
                    this.props.fSave({save}); 
                }
            });
            let index13 = ['ramasser', 'prendre', 'prend','ramasse', 'rammase', 'ramase']
            index13.forEach(element => {
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

            let index21 = ['toucher', 'éffleurer ', 'touche', 'oui', 'aproche', 'baise', 'approche' ]
            index21.forEach(element => {
                if(input.includes(element)){
                    let save = 2;
                    this.props.fSave({save}); 
                }
            });

            let index22 = ['nop', 'pas ', 'nom', 'ravise', 'arrète', 'éloigne', 'je ne la touche pas']
            index22.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });

            return(
                <ul>
                    <li>Vous vous pencher sur la pierre, d'un regard intérogateur.</li>
                    <li>Votre passer aussi riche fut été, ne vous permit pas d'identifier l'incription posser amème la roche.</li>
                    <li>Mais, il semblai qu'un l'éger souvenir d'un vieux livre sur l'histoire de Zaxarot vous mis en grade d'un dangers.</li>
                    <li>Mais oserer vous y toucher, malegere cette étrange lumière verdatre ?</li>
                </ul>
            );
        }

        // ramasser la pierre 
        if(this.props.save == 3){
            let input = this.props.result

            let index31 = ['oui', 'yes', 'yep' , 'je le fait ']
            index31.forEach(element => {
                if(input.includes(element)){
                    let save = -1;
                    this.props.fSave({save}); 
                }
            });
            let index32 = ['no', 'nop', 'non', 'pas']
            index32.forEach(element => {
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

            let index42 = ['éloignier', 'fuire','cour', 'part', 'par', 'pare', 'recule', 'éloigne']
            index42.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
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

            let index61 = ['demander', 'demande', 'question', 'posa', ]
            index61.forEach(element => {
                if(input.includes(element)){
                    let save = 5;
                    this.props.fSave({save}); 
                }
            });
            let index62 = ['iniore', 'part', 'passe', 'chemain', 'cours', 'écrate']
            index62.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });
            let index63 = ['aproche', 'approche ', 'approcher', 'reagarder', 'regarde', 'voir', 'prudance',]
            index63.forEach(element => {
                if(input.includes(element)){
                    let save = 6;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous raviser et vous reculer d'un pas, mais pensant qu'une pierre qui brillait au fin fond d'une forait. Pouvait avoir son importance 
                        vour rercher dans votre petit packtage, un papier et un bou de charbon pour y noter les syboles inscri sur la pierre. </li>
                    <li> </li>
                    <li>Puis vous retourner sur le chemain principale, en avancant parmie les feillage et les prierre sur le chemin vous commancer à distinguer au loin parmie la pénonbre
                         ce qui cemblait être un homme avec un chario tirer par deux énorme bufle. En aprochant il vous interpelle.</li>
                    <li>Que faite vous ?</li>
                </ul>
            );

        }

        //Question passer son chemain 
        if(this.props.save == 6){
            let input = this.props.result

            let index61 = ['demander', 'demande', 'question', 'posa', ]
            index61.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });
            let index62 = ['iniore', 'part', 'passe', 'chemain', 'cours', 'écrate']
            index62.forEach(element => {
                if(input.includes(element)){
                    let save = 3;
                    this.props.fSave({save}); 
                }
            });
            let index63 = ['aproche', 'approche ', 'approcher', 'reagarder', 'regarde', 'voir', 'prudance',]
            index63.forEach(element => {
                if(input.includes(element)){
                    let save = 5;
                    this.props.fSave({save}); 
                }
            });

            return(
                <ul>
                    <li>Vous passer votre chemain non sans un petite regettre, mais dans vos souvenir se trouvait une étrange chensation.</li>
                    <li>Mais bon apres tous une pierre qui brille au fond d'une foret, c'est rien de spécial à zaxarote. </li> 
                    <li>Vous avancer sur le chemain sombre éclairer par la lueur de la plaine lune, le vent se fesait frait. Vous vous dite que vous aurier surement du écouter votre petite maman quand elle vous à dis
                        de prendre un plus gros pull.</li>
                    <li>En avancant sur le centier vous appèrcever au loin ce qui cemblait être un homme avec un chario tirer par deux énorme bufle. En aprochant il vous interpelle.</li>
                    <li>Que faite vous ?</li>
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
            let index72 = ['toucher', 'jète dessus', 'touche', 'approche', 'ataque', 'pencher', 'penche', 'approcher']
            index72.forEach(element => {
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

            let index81 = ['toucher', 'éffleurer ', 'touche']
            index81.forEach(element => {
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
        
        //HOMME---------------------------------------------

        //vous l'iniorer et vous parter
        if(this.props.save == 9){
            let input = this.props.result

            let index91 = ['toucher', 'éffleurer ', 'touche']
            index91.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous vous écrater de l'homme, passant a coter sans le regarder. il vous regadait avec un hère dubitatif 
                    puis il marmona un truc incontréhensible sur une famille et une sertène coureuse de renpare.</li>
                </ul>
            );

        }
        //vous lui poser un question 
        if(this.props.save == 10){
            let input = this.props.result

            let index111 = ['oui', 'suis', 'nom', 'mon', 'prenom', this.props.name, 'raison']
            index111.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index112 = ['non', 'regarde ','pas', 'je ne', 'adieux']
            index112.forEach(element => {
                if(input.includes(element)){
                    let save = 2;
                    this.props.fSave({save}); 
                }
            });
            let index113 = ['fuit', 'fui', 'part', 'partir', 'éloigne', 'cour', 'courir', 'éloignier', 'écarter', 'écarte']
            index113.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous aprocher de l'homme, et vous vous écrier non sans assurance:</li>
                    <li>Holla mon brave qui être vous, que faite vous sur cette route a la nuit tonber ? et que me vouler vous ?</li>
                    <li> </li>
                    <li>Bonsoir à vous voyageur, je suis Colérer Stérolamm un inble fermier. Et si mon attitude vous semble bizzare je ne peu que vous dir que pour des ceurelle de clocher je suis obliger je faire mon l'abeur de nuit.</li>
                    <li>Mais dit moi plutôt votre nom ? par les temps qui coure à zaxarot il est bon de savoir à qui on a faire. </li>
                </ul>
            );

        }
        //vous vous procher 
        if(this.props.save == 11){
            let input = this.props.result

            let index111 = ['oui', 'suis', 'nom', 'mon', 'prenom', this.props.name, 'raison']
            index111.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index112 = ['non', 'regarde ','pas', 'je ne', 'adieux']
            index112.forEach(element => {
                if(input.includes(element)){
                    let save = 2;
                    this.props.fSave({save}); 
                }
            });
            let index113 = ['fuit', 'fui', 'part', 'partir', 'éloigne', 'cour', 'courir', 'éloignier', 'écarter', 'écarte']
            index113.forEach(element => {
                if(input.includes(element)){
                    let save = -2;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Bonsoir à vous voyageur, je suis Colérer Stérolamm un inble fermier. Et si mon attitude vous semble bizzare je ne peu que vous dir que pour des ceurelle de clocher je suis obliger je faire mon l'abeur de nuit.</li>
                    <li>Mais dit moi plutôt votre nom ? par les temps qui coure à zaxarot il est bon de savoir à qui on a faire. </li>
                </ul>
            );

        }

        //Dite votre nom
        if(this.props.save == 12){
            let name = this.props.name
            let input = this.props.result
            let index121 = ['oui', 'suis', 'prend', 'merci', 'ok',]
            index121.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index122 = ['non', 'ragarde ', 'pas', 'je ne', 'adieux']
            index122.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            
            return(
                <ul>
                    <li>Je suis <p className="Name">{name}</p>, Vous dite ce nom mais vous ne savier pas trop quoi y mettre aa ça suite. Mais vous lui réponder quand même, Je ne suis qu'un voyageur venant de l'écranger, et li me semble que je vien des frontier de l'est.</li>
                    <li>Oh vous être donc un voyageur des terre de l'est par dela les montage de Mortifierr, Dit l'homme visiblement un peu déconcerter par votre réponce. Mais dit moi ce n'est pas la porte a coter surtout a pied.
                        m'enfin, tant que vous n'être pas un de Bession-Deskart qui me fond tent de missère et me force a voyager sur les sombre chemain éclairer pare la lune.
                    </li>
                    <li> </li>
                    <li>Sur c'est mot vous vous dit que cette histoire étais bien étrange. Bref, séclama l'homme ce qui vous tira de votre réflection, puis il enchèna, c'est histoire de doit pas trop vous intéresser.</li>
                    <li>Mais dite moi, j'ai trouver ça durant mon petit voyage dans un clairière par la ou vous vener. Peut être que vous voyageur saver vous ce que c'est ? L'homme vous tendie un petite objet, il était d'une forme carer et lisse d'un noire profond.
                        un de c'est arraite il y avait quelle que petit trou. Et sur une autre plus longue il y avais  de petites bosses très abrutes qui quand on passait le doit dessus l'anblait safèsser </li>
                    <li>Vous voyant regarder l'ojet avec insitance l'homme vous dit, Si vous vouler vous pouver le prendre il mes d'aucune utilister et si j'amais vous trouver quel qu'un pour vous renseigner, puisse t'il égailler votre journer .
                        Mais je ne vous forsse pas et vous faite ce que vous vouller ?</li>
                </ul>
            );

        }
        
        //ne dite pas votre nom
        if(this.props.save == 13){
            let input = this.props.result
            let index131 = ['oui', 'suis', 'prend', 'merci', 'ok',]
            index131.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            let index132 = ['non', 'ragarde ', 'pas', 'je ne', 'adieux']
            index132.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            
            return(
                <ul>
                    <li>Je ne vous dirait pas mon, homme ! L'homme vous regardat d'un yeux énerver et vous dit avant de continuer ça route, Encore un de c'est fils de courause de renpare de cher les Bession-Deskart.
                        Je ne vous souaite pas une bonne nuit ! Il séloinia de vous d'un pas loure suivie de son chario.
                    </li>
                </ul>
            );

        }

        //Partie ver le village 
        if(this.props.save == 14){
            let input = this.props.result
            let index143 = ['fuit', 'fui', 'part', 'partir', 'éloigne']
            index143.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous vous éloignier de l'homme qui fini par disparaitre dans les ténèbre.</li>
                    <li>Vous arriver au village de Sastonne</li>
                </ul>
            );
        }

        //Partie ver le village 
        if(this.props.save == 15){
            let input = this.props.result
            let index153 = ['fuit', 'fui', 'part', 'partir', 'éloigne']
            index153.forEach(element => {
                if(input.includes(element)){
                    let save = 1;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous vous éloignier de l'homme aprait avoir mis votre butin dans votre sac et en regardant derière vous, vous d'intingué l'homme qui fini
                     par disparaitre dans les ténèbre.</li>
                     <li>Vous arriver au village de Sastonne</li>
                </ul>
            );
        }




//mort 
    if(this.props.save >= 1000){
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
        if(this.props.save >= 404){
            return(
                <ul>
                    <li>Je n'est pas compprid reformuléer SVP ?</li> 
                </ul>
            );
        }


    };
}

export default Moteur;
