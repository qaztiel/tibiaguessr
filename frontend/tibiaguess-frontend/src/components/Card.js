import Image from 'react-bootstrap/Image';
import { TibiaMap } from './TibiaMap';
import thais_crossroads from '../images/thais_crossroads.png';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <Image src={thais_crossroads} className='card--image' />
        <TibiaMap></TibiaMap>
        <button className='card--btn'>Guess</button>
      </div>
    </div>
  );
};

export default Card;
