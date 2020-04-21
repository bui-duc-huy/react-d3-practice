import React from 'react';
import './App.css';
import RaceChart from './chart/raceChart'
import BasicChart from './chart/basicChart'
import LineChart from './chart/lineChart'

function App() {
  return (
    <div>
      <LineChart></LineChart>
      <BasicChart></BasicChart>
      <RaceChart></RaceChart>
    </div>
  )
}

export default App;
