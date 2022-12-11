import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot';
import { GuessButton } from './GuessButton';
import '../style/Game.css';


const Game = () => {
  

  return (
    <div id='game'>
        <ScreenShot></ScreenShot>
        <TibiaMap></TibiaMap>
        <GuessButton></GuessButton>
       
    </div>
  );
};


export default Game;
