import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';


function App() {
  return (
    <div>
      <NavBar />
      <Card />
      <button className='card--btn'>Guess</button>
    </div>
  );
}
export default App;
