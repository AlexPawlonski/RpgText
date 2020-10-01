import React from 'react';
class Moteur extends React.Component{
    render(){
        //Question Début 
        if(this.props.save <= 0){
            if(this.props.name == "" ){ 
                return(
                    <ul>
                        <li>Enter votre <p className="Name">nom</p> de voyageur !</li>
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
                        <li>Bonjour <p className="Name">{name}</p>, Préparer vous à entrer dans <p className="Name">Zaxarot !!</p> </li>
                        <li>Voulez-vous commencer une nouvelle partie ? </li>
                        <li>Si vous avez déjà une partie à <p className="Name">continuer</p> cliquer sur la disquette. Vous pourrez la sauvegardé à tou moment en cliquant sur le parchemin.</li>    
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
                    <li>Vous être dans un foret du fin fond de <p className="Name">Zaxarote</p>.</li> 
                    <li>La lune est claire et le vent est calm, La sur un père a vos pieds se trouve un signe.</li>
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
                    <li>Vous vous penchez sur la pierre, d'un regard interrogateur.</li>
                    <li>Votre passé aussi riche fut été, ne vous permit pas d'identifier l'inscription poser sur la roche.</li>
                    <li>Mais il sembla qu'un léger souvenir d'un vieux livre sur l'histoire de <p className="Name">Zaxarot</p> vous mis en grade d'un danger.</li>
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
                    <li>En regardant la pierre, vous vous dites quelle est bien grosse pour que vous puissiez la predendre.</li>
                    <li>Mais du bous des doit vous vous approcher de la pierre et une lumière un vert pale commença à y émaner,
                    Soudain un sursaut d'hésitation, vous envahit pourriez vous au moins la toucher ? </li>
                    
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
                    <li>Avec assurance, vous touchez la pierre, ça lueur augmenta d'un coup ! </li>
                    <li>Un peu éblouie, vous vous cachez les yeux avec votre bras, surprîtes vous reculez d'un pas !</li>
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
                    <li>Vous raviser et vous reculer d'un pas, mais pensant qu'une pierre qui brillait au fin fond d'une forêt.</li>
                    <li>Pouvait avoir son importance, vous cherchez dans votre petit package, un papier et un bout de charbon pour y noter les symboles inscrit sur la pierre.
                    Puis vous retourner sur le chemin principal, en avançant parmi les feuillages et les pierres sur le chemin vous commencez à distinguer au loin parmi la pénombre
                    ce qui comblait être un homme avec un chariot tirer par deux énorme buffle. En approchant, il vous interpelle.</li>
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
                    <li>Vous passer votre chemin non sans un petit regret, mais dans vos souvenirs se trouvait, une étrange cessation.
                    Mais bon après tous une pierre qui brille au fond d'une forêt, c'est rien de spécial à <p className="Name">Zaxarote</p>.</li>
                    <li>Vous avancez sur le chemin sombre éclairé par la lueur de la pleine lune, le vent se faisait frais. Vous vous dite que vous auriez sûrement du écouter votre petite maman quand elle vous à dis
                    de prendre un plus gros pull.</li>
                    <li>En avançant sur le centier vous apercevez au loin ce qui comblait être un homme avec un chariot tiré par deux énorme buffle. En approchant, il vous interpelle.</li>
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
                    <li>Vous être sur vos gardes et vous regarder autour de vous, il n'y avait pas grand chose à votre droit un petit chemin qui ramenait a la route principale.
                        À votre gauche, la forêt s'étendait sur des mille, mais vous distinguez une petite clairière, sûrement un endroit pour faire pâturer les bêtes.
                        Derrière vous la forêt, et devant vous la pierre, qui maintenant que vous y péter attention, vous remarquer que cette prière ressemblais a un vielle stel polie par le temps.
                    </li>
                    <li>Que faite vous ?</li>
                </ul>
            );

        }

        //la fuite de la pierre
        if(this.props.save == 8){
            let input = this.props.result

            let index81 = ['demander', 'demande', 'question', 'posa', ]
            index81.forEach(element => {
                if(input.includes(element)){
                    let save = 4;
                    this.props.fSave({save}); 
                }
            });
            let index82 = ['iniore', 'part', 'passe', 'chemain', 'cours', 'écrate']
            index82.forEach(element => {
                if(input.includes(element)){
                    let save = 3;
                    this.props.fSave({save}); 
                }
            });
            let index83 = ['aproche', 'approche ', 'approcher', 'reagarder', 'regarde', 'voir', 'prudance',]
            index83.forEach(element => {
                if(input.includes(element)){
                    let save = 5;
                    this.props.fSave({save}); 
                }
            });
            return(
                <ul>
                    <li>Vous fuyez rapidement de l'emplacement de la pierre, sans vous retourner vous courez dans une direction inconnue, car dans votre fuite vous n'aviez pas eu le temps de savoir un vous aller.
                    Par un heureux hasard ou par chance, vous arrivez sur le chemin. hasard ou par chance vous arriver sur le chemin.</li>
                    <li>En avançant sur le centier vous apercevez au loin ce qui comblait être un homme avec un chariot tiré par deux énorme buffle. En approchant, il vous interpelle.</li>
                    <li>Que faite vous ?</li>
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
                    <li>Vous vous écarter de l'homme, passant a coter sans le regarder. Il vous regardait avec un hère dubitatif.
                    Puis il marmonna un truc incompréhensible sur une famille et <p className="Name">une certaines coureuse de rempart!</p></li>
                </ul>
            );

        }
        //vous lui poser un question 
        if(this.props.save == 10){
            let input = this.props.result

            let index111 = ['oui', 'mon', 'prenom', this.props.name, 'raison', 'appel']
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
                    <li>Vous approcher de l'homme, et vous vous écriez non sans assurance :</li>
                    <li>Holla mon brave qui être vous, que faite vous sur cette route a la nuit tomber ? Et que me voulez-vous ?</li>
                    <li>Bonsoir à vous voyageur, je suis Colérer Stérolamm un humble fermier. Et si mon attitude vous semble bizarre je ne peu que vous dire que pour des cruelles de clocher, je suis obligé, je faire mon labeur de nuit.</li>
                    <li>Mais dit moi plutôt votre nom ? par les temps qui courent à zaxarot il est bon de savoir à qui on à faire.</li> 
                </ul>
            );

        }
        //vous vous procher 
        if(this.props.save == 11){
            let input = this.props.result

            let index111 = ['oui', 'suis', 'nom', 'mon', 'prenom', 'raison']
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
                    <li>Bonsoir à vous voyageur, je suis <p className="Name">Colérer Stérolamm</p> un humble fermier. Et si mon attitude vous semble bizarre je ne peu que vous dire que pour des cruelles de clocher, je suis obligé, je faire mon labeur de nuit.</li>
                    <li>Mais dit moi plutôt votre nom ? par les temps qui courent à <p className="Name">Zaxarot</p> il est bon de savoir à qui on à faire.</li> 
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
                    <li>Je suis <p className="Name">{name}</p>, vous dite ce nom, mais vous ne saviez pas trop quoi y mettre a ça suite. Mais vous lui répondez quand même, je ne suis qu'un voyageur venant de l'étranger, et li me semble que je viens des frontière de l'est.</li>
                    <li>Oh vous être donc un voyageur des terres de l'est par delà les montages de Mortifierr, Dit l'homme visiblement un peu déconcerter par votre réponse. Mais dit moi ce n'est pas la porte a coter surtout a pied.
                        M'enfin, tant que vous n'être pas un de <p className="Name">Bession-Deskart </p>qui me fond tant de misère et me force a voyager sur les 
                        sombre chemin éclairer pare la lune.</li>
                    <li>Sur ces mots, vous vous dites que cette histoire était bien étrange. Bref, s'exclama l'homme ce qui vous tira de votre réflexion, puis il enchaîna, cette histoire de doit pas trop vous intéressez.</li>
                    <li>Mais dite moi, j'ai trouvé ça durant mon petit voyage dans une clairière par la ou vous venez. Peut-être que vous voyageur savez vous ce que c'est ? L'homme vous tendit un petit objet, il était d'une forme carré et lisse d'un noir profond.
                        Un de c'est arrêtent, il y avait quelle que petit trou. Et sur une autre plus longue, il y avait de petites bosses très abruptes qui quand on passait le doit dessus s'amblaient safèsser. </li>
                    <li>Vous voyant regarder l'objet avec insistance l'homme vous dit, Si vous voulez vous pouvez le prendre il mes d'aucune utiliser et si jamais vous trouver quel qu'un pour vous renseigner, puisse t'il égailler votre journée.
                        Mais je ne vous force pas et vous faite ce que vous voulez ?</li>
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
                    <li>
                    Je ne vous dirais pas mon, homme ! L'homme vous regarda d'un œil énerver et vous dit avant de continuer ça route, Encore un de ces fils de coureuse de rempart de cher les <p className="Name">Bession-Deskart</p>.
                    Je ne vous souhaite pas une bonne nuit ! Il s'éloinia de vous d'un pas loure suivie de son chariot.
                    </li>
                    <li>Vous vous éloigniez de l'homme qui finit par disparaître dans les ténèbres.</li>
                    <li>Vous arrivez au village de Sastonne</li>
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
                    <li>Vous vous éloigniez de l'homme qui finit par disparaître dans les ténèbres.</li>
                    <li>Vous arrivez au village de <p className="Name">Sastonne</p></li>
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
                    <li>Vous vous éloigner de l'homme, apprêt avoir mis votre butin dans votre sac et en regardant dernière vous, vous d'intingué l'homme qui finit
                        pars disparaître dans les ténèbres.</li>
                     <li>Vous arriver au village de <p className="Name">Sastonne</p></li>
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
                <li>Vous être mort ! Vous n'avez pas su venir a bout de <p className="Name">Zaxarot</p> !!</li>
                <li>Voulez-vous revivre ?</li>
            </ul>
        ); 
    }   

//Event erreur de compréhention 
        if(this.props.save >= 404){
            return(
                <ul>
                    <li>Je n'ai pas compris reformuler SVP ?</li> 
                </ul>
            );
        }


    };
}

export default Moteur;
