import React, { useEffect, useRef, useState } from 'react';
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom } from 'd3'
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
