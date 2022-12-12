import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Game from './components/Game';
import Footer from './components/Footer';


function App() {
  return (
    <div id='app'>
      <NavBar />
      <Game />
      <Footer />
    </div>
  );
}


export default App;
