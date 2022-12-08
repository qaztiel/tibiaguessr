import Image from 'react-bootstrap/Image';
import thais_crossroads from '../images/thais_crossroads.png';


export function ScreenShot() {
    return (
        <Image 
            src={thais_crossroads} 
            fluid={true}
            style={{display: 'block', margin: 'auto'}}/>
    )
}