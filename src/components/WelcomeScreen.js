import React, { Component } from 'react';
import '../style/PersonalWebsite.css';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import FontAwesome from 'react-fontawesome'

const interests = [
  'Machine Learning',
  'Artificial Intelligence',
  'Web development',
  'Product Design',
  'Application Development',
  'Cryptocurrency'
]

class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="welcomeScreen">
        <Typography className='centerText'>
          Developer.
        </Typography>

        <Typography className='centerText'>
          Thinker.
        </Typography>

        <Typography className='centerText'>
          Life long student.
        </Typography>

        <Typography className='centerTextDescription'>
          Hi, Im Filip. I am currently studying software engineering at the university of Ottawa.
          I enjoy spending time writing cool software, learning new technologies and finding the next best place to eat.
          Things that interest me include but are not limited to:
        </Typography>

        <div style={{'display': 'flex', 'flexDirection': 'row', 'maxWidth': '500px', 'flexWrap': 'wrap', 'padding': '10 10px 10px 0'}}>
          {interests.map((i, index) => {
            return(
              <Chip
              key={index}
              label={i}
              style={{'margin': '5px'}}
              className='interestsChips'
            />
            )
          })}
        </div>

        <div style={{'display': 'flex', 'flexDirection': 'row', 'maxWidth': '100px', 'paddingTop': '15px'}}>
          <a target="_blank" href='https://github.com/IMFIL' style={{'textDecoration': 'none'}}>
            <FontAwesome
              className='githubIcon'
              name='github'
              size='2x'
              style={{'padding': '15px 15px 0 0'}}
            />
          </a>

          <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/filip-slatinac/' style={{'textDecoration': 'none'}}>
            <FontAwesome
              className='linkedInIcon'
              name='linkedin'
              size='2x'
              style={{'padding': '15px'}}
            />
          </a>
        </div>

      </div>
    );
  }
}

export default WelcomeScreen
