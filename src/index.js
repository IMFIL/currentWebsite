import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import PersonalWebsite from './PersonalWebsite';
import registerServiceWorker from './registerServiceWorker';
import Particles from 'react-particles-js';
import particlesConfig from './particles-config/particlesjs-config.json';

class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'displayParticles': window.innerWidth > 1000
    }
  }

  toggleParticles = (showParticles) => {
    this.setState({
      'displayParticles': showParticles
    })
  }

  render() {
    return(
      <div style={{'height': '100%'}}>
        {this.state.displayParticles &&
          <Particles
                params = {particlesConfig}
                className = 'particlesCanvasStyle'
            />
        }
        <PersonalWebsite toggleParticles={this.toggleParticles.bind(this)} />
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('root'));
registerServiceWorker();
