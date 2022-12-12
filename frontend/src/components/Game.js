import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot';
import { GuessButton } from './GuessButton';
import '../style/Game.css';


const Game = () => {
  

  return (
    <div id='game'>
        <div id='overlapping'>
          <ScreenShot></ScreenShot>
          <TibiaMap></TibiaMap>
        </div>
        <div>
          <GuessButton></GuessButton>
        </div>
    </div>
  );
};


export default Game;
