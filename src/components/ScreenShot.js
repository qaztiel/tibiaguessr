import Image from 'react-bootstrap/Image';
import thais_crossroads from '../images/challenge_thais_crossroads.png';


export function ScreenShot() {
    return (
        <div id='screenshot-container'>
            <Image
            src={thais_crossroads} 
            width='100%'
            />
        </div>
        
    )
}