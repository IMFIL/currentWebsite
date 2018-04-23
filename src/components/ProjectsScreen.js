import React, { Component } from 'react';
import './style/ProjectsScreen.css';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';

const tech = ['Meteor', 'HTML', 'CSS']

class ProjectsScreen extends Component {

  render(){
    return(
      <div className='projectsContainer'>
        <div className='flavorHubContainer'>
          <img className='flavorHubImage' src={require('../images/flavorHub.png')}/>
        </div>
        <div className='cookRContainer'>
          <img className='cookRImage' src={require('../images/cookR.png')}/>
        </div>
        <div className='petTraceContainer'>
          <img className='petTraceImage' src={require('../images/petTrace.png')}/>
        </div>
        <div className='pegasusContainer'>
          <img className='pegasusImage' src={require('../images/pegasus.png')}/>
        </div>
        <div className='busNowContainer'>
          <img className='busNowImage' src={require('../images/busNow.png')}/>
        </div>
      </div>
    )
  }
}


export default ProjectsScreen
