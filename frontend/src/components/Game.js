import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot'
import '../style/Game.css';


const Game = () => {
  return (
    <div>
        <ScreenShot class='inner'></ScreenShot>
        <TibiaMap class='inner'></TibiaMap>
    </div>
  );
};


export default Game;
