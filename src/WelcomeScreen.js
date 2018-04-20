import React, { Component } from 'react';
import './style/PersonalWebsite.css';
import Typography from 'material-ui/Typography';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="welcomeScreen" >
        <Typography className='centerText'>
          Filip Slatinac
        </Typography>

        <Typography className='centerTextDescription'>
          Minimalist by nature
        </Typography>
        <Typography className='centerTextDescription'>
          -Site Under Construction-
        </Typography>
      </div>
    );
  }
}

export default WelcomeScreen
