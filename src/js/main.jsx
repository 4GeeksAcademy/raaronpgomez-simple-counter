import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondsCounter from './components/SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
let seconds = 0;

setInterval(() => {
  const one = seconds % 10;
  const two = Math.floor(seconds / 10) % 10;
  const three = Math.floor(seconds / 100) % 10;
  const four = Math.floor(seconds / 1000) % 10;
  const five = Math.floor(seconds / 10000) % 10;
  const six = Math.floor(seconds / 100000) % 10;



  root.render(
    <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />
  );


seconds++;
}, 1000);