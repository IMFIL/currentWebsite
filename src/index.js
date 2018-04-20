import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import PersonalWebsite from './PersonalWebsite';
import registerServiceWorker from './registerServiceWorker';
import Particles from 'react-particles-js';
import particlesConfig from './particles-config/particlesjs-config.json';

const particlesCanvasStyle =
  {
    'position': 'fixed',
    'top': '0px',
    'left': '0px',
    'width': '100%',
    'height': '100%',
    'backgroundColor': 'white'
  }

ReactDOM.render(
  <div style={{'height': '100%'}}>
    <Particles
          params = {particlesConfig}
          style = {particlesCanvasStyle}
        />
      <PersonalWebsite />
  </div>
  , document.getElementById('root'));
registerServiceWorker();
