import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot'
import '../style/Game.css';


const Game = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <ScreenShot></ScreenShot>
        <TibiaMap></TibiaMap>
      </div>
    </div>
  );
};


export default Game;
