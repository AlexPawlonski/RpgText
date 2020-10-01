import React from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

class Image extends React.Component{
    render(){
        let save = this.props.save;

        function displayImage (save){
            
            if (save == 1 || save == 7) {
                return img1;
            }else if (save >=2 && save <= 5){
                return img2;

            }else if (save !=7 && save > 5 && save <=15){
                return img3;
            }
        }

        return(
          <img id='imgContext' src={displayImage(save)}/>  
        );
    }
}


export default Image;