import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Game from './components/Game';


function App() {
  return (
    <div>
      <NavBar />
      <Game />
    </div>
  );
}


export default App;
