import React, { Component } from 'react';
import './style/WorkScreen.css';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LensIcon from '@material-ui/icons/Lens';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import Tooltip from 'material-ui/Tooltip';
import MediaQuery from 'react-responsive';
import Swipe from 'react-easy-swipe';

//Add skill bar belowimage and description

const workItems = [
  {
    'id': 'uofo',
    'name': 'University Of Ottawa',
    'description':
      'Worked in a team of 5 to design, create and maintain a web application which enabled students to connect with academic adivsors.',
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
      'Worked with 4 developers to abstract the concept of network alarms which enabled the dynamic'+
      ' creation of alarms upon software errors, designers at Nokia are still using this abstraction.'+
      ' Received the maximal standing for a coop term, Exceptional.',
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
      'Worked with 7 full time engineers on the improvement and maintainance of Blue Planet\'s UI, the website which customers such as Telus'+
      ' and Vodafone use to maintain their networks. At ther end of the term, I was nomitated as the coop student of the year as well as received the'+
      ' maximal standing for a coop term.',
    'image': require('../images/Ciena_logo.svg'),
    'viewBox': '0 0 1100 300',
    'heightSvg': '200',
    'widthSvg': '200',
    'height': '500',
    'width': '800'
  },
  {
    'id': 'ibm',
    'name': 'IBM',
    'description':
      'Will be participating in IBM\'s Extreme Blue program as a technical intern',
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

  changeCurrentWork = (increment) => {
    if (this.state.currentWorkObject + increment >= workItems.length) {
      this.setState({
        'currentWorkObject': 0
      })
    }

    else if (this.state.currentWorkObject + increment < 0) {
      this.setState({
        'currentWorkObject': workItems.length - 1
      })
    }

    else {
      this.setState({
        'currentWorkObject': this.state.currentWorkObject + increment
      })
    }
  }


  render() {

    return (
      <div className='workArea'>
        <div className='workScreenContainer'>

          <div className='workScreenContentContainer'>

            <Grid container className='imageGridItem' spacing={24}>
              <Grid item xs={12} sm={6} style={{'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>
                <svg className='svgImage'
                id={workItems[this.state.currentWorkObject]['id']}
                viewBox={workItems[this.state.currentWorkObject]['viewBox']}
                width={workItems[this.state.currentWorkObject]['widthSvg']}
                height={workItems[this.state.currentWorkObject]['heightSvg']}>

                  <image
                  width={workItems[this.state.currentWorkObject]['width']}
                  height={workItems[this.state.currentWorkObject]['height']}
                  xlinkHref={workItems[this.state.currentWorkObject]['image']}/>

                </svg>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography className='WorkDescription'>
                  {workItems[this.state.currentWorkObject]['description']}
                </Typography>
              </Grid>
            </Grid>
          </div>
            <div className='workNavigationController'>
              <div className='chevronLeftContainer'>
                <Tooltip id="tooltip-chevronLeft"
                title={this.state.currentWorkObject - 1 >= 0 ? workItems[this.state.currentWorkObject - 1]['name'] : workItems[workItems.length - 1]['name'] }
                placement="left-start" className='toolTipText'>
                  <ChevronLeftIcon aria-label='chevronLeft' className='chevron' onClick={() => {this.changeCurrentWork(-1)}}/>
                </Tooltip>
              </div>

              <div className='workIndicatorsContainer'>
                {workItems.map((i, index) => {
                  if (index === this.state.currentWorkObject) {
                    return(<LensIcon className='indicatorIconFilled' key={index}/>)
                  }
                  return(<PanoramaFishEyeIcon key={index} onClick={() => {this.setState({'currentWorkObject': index})}} className='indicatorIconEmpty'/>)
                })}
              </div>

              <div className='chevronRightContainer'>
                <Tooltip id="tooltip-chevronRight"
                title={this.state.currentWorkObject + 1 < workItems.length ? workItems[this.state.currentWorkObject + 1]['name'] : workItems[0]['name'] }
                placement="right-start" className='toolTipText'>
                  <ChevronRightIcon aria-label='chevronRight' className='chevron' onClick = {() => {this.changeCurrentWork(1)}}/>
                </Tooltip>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default WorkScreen
