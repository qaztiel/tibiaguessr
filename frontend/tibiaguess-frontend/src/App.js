import './App.css';
import React from 'react'
import { TibiaMap } from './components/TibiaMap';
import {Screenshot} from './components/Screenshot';
import BrandBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div>
        <BrandBar/>
        <div>
          <Screenshot/>
          <TibiaMap/>
        </div>
      </div>
  );
}
export default App;
