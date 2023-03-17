import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot';
import { GuessButton } from './GuessButton';
import '../style/Game.css';


const Game = () => {
  

  return (
    <div id='game-container'>
        <div id='overlapping'>
          <ScreenShot/>
          <TibiaMap/>          
        </div>
        <div id='btn-container'>
          <GuessButton/>
        </div>
    </div>
  );
};


export default Game;
