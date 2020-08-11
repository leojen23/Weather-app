import React from 'react';
import Header from './components/Header';
import Weather from './components/Weather';

import './App.css';


const App = () => 
  
(
    <div className="App">
      <Header />

      <div className="row justify-content-center container">
        <div className="col s12 m6 offset-m3">

        <Weather />

        </div>
      </div>
    </div>
  );

  
export default App;
