import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';
import React from 'react';
import BrandBar from './components/Navbar';
import Card from './components/Card';


function App() {
  return (
    <div>
      <BrandBar />
      <Card />
      <button className='card--btn'>Guess</button>
    </div>
  );
}
export default App;
