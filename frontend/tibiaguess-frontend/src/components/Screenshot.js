import Image from 'react-bootstrap/Image';
import thais_crossroads from './thais_crossroads.png';


export function Screenshot() {
    return (
        <Image 
            src={thais_crossroads} 
            fluid={true}
            style={{display: 'block', margin: 'auto'}}/>
    )
}