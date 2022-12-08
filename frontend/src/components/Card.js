import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot'

const Card = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <ScreenShot></ScreenShot>
        <TibiaMap></TibiaMap>
        <button className='card--btn'>Guess</button>
      </div>
    </div>
  );
};

export default Card;
