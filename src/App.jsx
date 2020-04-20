import React from 'react';
import './App.css';
import RaceChart from './chart/raceChart'
import BasicChart from './chart/basicChart'

function App() {
  return (
    <div>
      <BasicChart></BasicChart>
      <RaceChart></RaceChart>
    </div>
  )
}

export default App;
