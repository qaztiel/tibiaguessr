import { TibiaMap } from './TibiaMap';
import { ScreenShot } from './ScreenShot'
import '../style/Game.css';


const Game = () => {
  function guess(e) {
    e.preventDefault();
    alert('You clicked submit')
  }

  return (
    <div id='game'>
        <ScreenShot></ScreenShot>
        {/* state for map */}
        <TibiaMap></TibiaMap>
        
        {/* TODO make button a component */}
        <button 
          className='footer--btn' 
          onClick={guess}
          >
            Guess
          </button>
    </div>
  );
};


export default Game;
