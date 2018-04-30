import React, { Component } from 'react';
import './style/WorkScreen.css';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LensIcon from '@material-ui/icons/Lens';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import Tooltip from 'material-ui/Tooltip';

//Add skill bar below image and description. Desktop -> dv that holds the skills. Mobile -> small containers holding work icon and skills with button to expand, when clicked
//Description slides from below

const workItems = [
  {
    'id': 'uofo',
    'name': 'University of Ottawa',
    'description':
      'Worked in a team of 5 to maintain, improve and test a web application which enabled students to connect with academic adivsors.' +
      ' I also Implemented a statistical end point which let users see how much a certain service was being utilized by students.' +
      ' ',
    'image': require('../images/University_of_Ottawa_Logo.svg'),
    'viewBox': '0 0 90 150',
    'heightSvg': '110',
    'widthSvg': '190',
    'height': '132',
    'width': '150'
  },
  {
    'id': 'nokia',
    'name': 'Nokia',
    'description':
      'Worked in a team of 4 developers on the abstraction of networking alarms. This enabled devlelopers to dynamically create alarms based on software errors.' +
      ' Prior to this change, developers were manually creating an alarm for every possible software error.' +
      ' At the end of the term I reveived the maximal standing for a coop term.',
    'image': require('../images/Nokia_logo.svg'),
    'viewBox': '0 0 350 80',
    'heightSvg': '100',
    'widthSvg': '250',
    'height': '140',
    'width': '250'
  },
  {
    'id': 'ciena',
    'name': 'Ciena',
    'description':
      'Worked with a team of 7 engineers on the improvement and maintainance of Blue Planet\'s UI, the website which customers such as Telus'+
      ' and Vodafone use to maintain their networks. In addition to maintance, I was tasked to revamp 2 graphical component which significantly aided the end users.' +
      ' At ther end of the term, I was nomitated as the coop'+
      ' student of the year as well as received the maximal standing for a coop term.',
    'image': require('../images/Ciena_logo.svg'),
    'viewBox': '0 0 1100 300',
    'heightSvg': '100',
    'widthSvg': '200',
    'height': '400',
    'width': '800'
  },
  {
    'id': 'ibm',
    'name': 'IBM',
    'description':
      'Will be participating in IBM\'s Extreme Blue program as a technical intern. More information to come.',
    'image': require('../images/IBM_logo.svg'),
    'viewBox': '0 0 1100 300',
    'heightSvg': '200',
    'widthSvg': '200',
    'height': '300',
    'width': '650'
  }
]

class WorkScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'currentWorkObject': 0
    }
  }



  render() {

    return (
      <div className='workArea'>
      </div>
    )
  }
}

export default WorkScreen
