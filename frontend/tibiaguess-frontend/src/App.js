import './App.css';
import React from 'react';
import { TibiaMap } from './components/TibiaMap';
import { Screenshot } from './components/Screenshot';
import BrandBar from './components/Navbar';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrandBar />
      <Card />
      <div>
        <Screenshot />
        <TibiaMap />
      </div>
    </div>
  );
}
export default App;
