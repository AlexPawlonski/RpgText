import React from 'react';
import img1 from './img1.png';
class Image extends React.Component{
    render(){
        let save = this.props.save;

        function displayImage (save){
            
            if (save >=1) {
                return img1;
            }
        }

        return(
          <img id='imgContext' src={displayImage(save)}/>  
        );
    }
}
export default Image;