import Image from 'react-bootstrap/Image';
import '../style/ScreenShot.css'


export function ScreenShot() {
    return (
        <div id='screenshot-container'>
            <Image
            src={"/images/challenge_thais_crossroads.png"} 
            />
        </div>
        
    )
}