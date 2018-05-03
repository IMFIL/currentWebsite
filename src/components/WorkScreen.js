import React, { Component } from 'react';
import './style/WorkScreen.css';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';

const workItems = [
  {
    'id': 'uofo',
    'name': 'University of Ottawa',
    'role': 'Web developer',
    'duration': 'Summer 2016 - Fall 2016',
    'description':
      'Worked in a team of 5 to maintain, improve and test a web application which enabled students to connect with academic adivsors.' +
      ' I also Implemented a statistical end point which let users see how much a certain service was being utilized by students.' +
      ' ',
    'image': require('../images/University_of_Ottawa_Logo.svg'),
    'heightSvg': '35%',
    'widthSvg': '35%',
    'width': '100%',
    'height': '100%'
  },
  {
    'id': 'nokia',
    'name': 'Nokia',
    'role': 'Software Designer',
    'duration': 'Winter 2017 - Summer 2017',
    'description':
      'Worked in a team of 4 developers on the abstraction of networking alarms. This enabled devlelopers to dynamically create alarms based on software errors.' +
      ' Prior to this change, developers were manually creating an alarm for every possible software error.' +
      ' At the end of the term I reveived the maximal standing for a coop term.',
    'image': require('../images/Nokia_logo.svg'),
    'heightSvg': '20%',
    'widthSvg': '42%',
    'width': '100%',
    'height': '100%'
  },
  {
    'id': 'ciena',
    'name': 'Ciena',
    'role': 'Front-end software developer',
    'duration': 'Fall 2017 - Winter 2018',
    'description':
      'Worked with a team of 7 on the improvement and maintainance of Blue Planet\'s UI, the web application which customers such as Telus'+
      ' and Vodafone use to maintain their networks. In addition to maintance, I was tasked to revamp 2 graphical component which significantly aided the end users.' +
      ' At ther end of the term, I was nomitated as the coop'+
      ' student of the year as well as received the maximal standing for a coop term.',
    'image': require('../images/Ciena_logo.svg'),
    'heightSvg': '24%',
    'widthSvg': '37%',
    'width': '100%',
    'height': '100%'
  },
  {
    'id': 'ibm',
    'name': 'IBM',
    'role': 'Extreme Blue technical intern',
    'duration': 'Summer 2018 - Fall 2018',
    'description':
      'Will be participating in IBM\'s Extreme Blue program as a technical intern. More information to come.',
    'image': require('../images/IBM_logo.svg'),
    'heightSvg': '15%',
    'widthSvg': '30%',
    'width': '100%',
    'height': '100%'

  }
]

class WorkScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'expansionMonitor':
        {
          'uofo': false,
          'nokia': false,
          'ciena': false,
          'ibm': false
        },
      'width': window.innerWidth
    }
  }

  updateDimensions = () => {
    this.setState({'width': window.innerWidth})
  }

  componentWillMount() {
    this.updateDimensions()
}
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  shouldComponentUpdate(nextProps, nextState) {

    for(var key in this.state.expansionMonitor) {
      if(this.state.expansionMonitor[key] === nextState.expansionMonitor[key]) {
        return true
      }
    }

    if((nextState.width <= 600 && this.state.width > 600) || (nextState.width > 600 && this.state.width <= 600)) {
      return true
    }

    return false
  }

  handleExpandClick = (id) => {
    let currentState = this.state.expansionMonitor
    currentState[id] = !currentState[id]
    this.setState({currentState})
  }

  render() {
    return (
      <div className='workArea'>
        <Grid container className='workContainer' spacing={24}>
        {workItems.map((i, index) => {
          return (
            <Grid item xs={12} sm={6} className='imageRowSection' key={index} id={workItems[index].id}>
              <Card className='projectCard'>
                <CardContent className='imageContainer' id={workItems[index].id}>
                  <svg
                  id={workItems[index]['id']}
                  width={workItems[index]['widthSvg']}
                  height={workItems[index]['heightSvg']}
                  style={{'position': 'relative', 'left': this.state.width >= 600 ? '8%' : '0'}}>

                    <image
                    width={workItems[index]['width']}
                    height={workItems[index]['height']}
                    xlinkHref={workItems[index]['image']}/>
                  </svg>
                  { this.state.width >= 600 &&
                    <CardActions style={{'position': 'relative', 'left': this.state.width >= 600 ? '20%' : '0'}} disableActionSpacing>
                      <IconButton
                        style = {{'transform': this.state.expansionMonitor[workItems[index].id] ? 'rotate(180deg)' : 'rotate(0deg)'}}
                        onClick={() => this.handleExpandClick(workItems[index].id)}
                        aria-expanded={this.state.expansionMonitor[workItems[index].id]}
                        aria-label="Show more"
                      >
                        <ExpandMoreIcon style={{'color': 'white'}} />
                      </IconButton>
                    </CardActions>
                  }
                </CardContent>
                { this.state.width < 600 &&
                  <CardContent className='unexpandedTextContainer'>
                    <Typography className='workName' component="p">
                      {workItems[index]['name']}
                    </Typography>
                    <Typography className='workRole' component="p">
                      {workItems[index]['role']}
                    </Typography>
                    <Typography className='workDuration' component="p">
                      {workItems[index]['duration']}
                    </Typography>
                  </CardContent>
                }

                { this.state.width < 600 &&
                  <CardActions className='expandButton' disableActionSpacing>
                    <IconButton
                      style = {{'transform': this.state.expansionMonitor[workItems[index].id] ? 'rotate(180deg)' : 'rotate(0deg)'}}
                      onClick={() => this.handleExpandClick(workItems[index].id)}
                      aria-expanded={this.state.expansionMonitor[workItems[index].id]}
                      aria-label="Show more"
                    >
                      <ExpandMoreIcon style={{'position': 'relative', 'left': this.state.width > 600 ? '20%' : '0'}} />
                    </IconButton>
                  </CardActions>
                }
                <Collapse in={this.state.expansionMonitor[workItems[index].id]} timeout="auto" unmountOnExit>
                  { this.state.width >= 600 &&
                    <CardContent className='unexpandedTextContainer'>
                      <Typography className='workName' component="p">
                        {workItems[index]['name']}
                      </Typography>
                      <Typography className='workRole' component="p">
                        {workItems[index]['role']}
                      </Typography>
                      <Typography className='workDuration' component="p">
                        {workItems[index]['duration']}
                      </Typography>
                    </CardContent>
                  }
                  <CardContent>
                    <Typography className='workDescription' paragraph>
                      {workItems[index]['description']}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
          </Grid>
          )
        })}
        </Grid>
      </div>
    )
  }
}

export default WorkScreen
