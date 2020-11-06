import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './style.css';

ReactDOM.render(<App />, document.getElementById('root'));

const reset = () => {
    const c = document.getElementById('myCanvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 155, 150);
};
  
const draw = winner => {
    const c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    ctx.beginPath();
    let startX, startY, endX, endY;
    switch (winner) {
      case 'row1':
        startX = 0;
        startY = 25;
        endX = 155;
        endY = 25;
        break;
      case 'row2':
        startX = 0;
        startY = 75;
        endX = 155;
        endY = 75;
        break;
      case 'row3':
        startX = 0;
        startY = 125;
        endX = 155;
        endY = 125;
        break;
      case 'col1':
        startX = 25;
        startY = 0;
        endX = 25;
        endY = 155;
        break;
      case 'col2':
        startX = 75;
        startY = 0;
        endX = 75;
        endY = 155;
        break;
      case 'col3':
        startX = 125;
        startY = 0;
        endX = 125;
        endY = 155;
        break;
      case 'diag1':
        startX = 0;
        startY = 0;
        endX = 155;
        endY = 150;
        break;
      case 'diag2':
        startX = 0;
        startY = 150;
        endX = 155;
        endY = 0;
    }
    ctx.moveTo(startX, startY);
    ctx.strokeStyle = 'red';
    ctx.lineTo(endX, endY);
    ctx.stroke();
};
  
export const canvas = {
    reset,
    draw,
};