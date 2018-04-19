import React, { Component } from 'react';
import './style/PersonalWebsite.css';
import particlesConfig from './particles-config/particlesjs-config.json';
import Particles from 'react-particles-js';
import Typography from 'material-ui/Typography';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
  const particlesCanvasStyle =
    {
      'position': 'fixed',
      'top': '0px',
      'left': '0px',
      'width': '100%',
      'height': '100%',
      'backgroundColor': 'white'
    }
    return (
      <div className="welcomeScreen" >
        <Particles
          params = {particlesConfig}
          style = {particlesCanvasStyle}
        />
        <Typography className='centerText'>
          Filip Slatinac
        </Typography>

        <Typography className='centerTextDescription'>
          Minimalist by nature
        </Typography>
      </div>
    );
  }
}

export default WelcomeScreen
