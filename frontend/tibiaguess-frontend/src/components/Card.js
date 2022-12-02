import Image from 'react-bootstrap/Image';
import thais_crossroads from './thais_crossroads.png';

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <Image src={thais_crossroads} className='card--image' />
      </div>
    </div>
  );
};

export default Card;
