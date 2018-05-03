import React, { Component } from 'react';
import './style/ProjectsScreen.css';
import FontAwesome from 'react-fontawesome'


const projects = [
  {
    'name': 'FlavorHub',
    'image': require('../images/flavorHub.png'),
    'width': '70%',
    'color': '#F88074',
    'description': 'Searching and rating tool for restaurants',
    'tech': ['React', '|', 'Flask'],
    'link': 'https://github.com/anthonyanader/flavorHubFrontEnd'

  },
  {
    'name': 'PetTrace',
    'image': require('../images/petTrace.png'),
    'width': '70%',
    'color': '#5BE6C7',
    'description': 'Web application for lost and found pets',
    'tech': ['Meteor'],
    'link': 'https://github.com/IMFIL/petTrace'

  },
  {
    'name': 'Pegasus',
    'image': require('../images/pegasus.png'),
    'width': '55%',
    'color': '#0C5DA7',
    'description': 'Interview preparation application which offers learning ressources, question and answers tailored for the searched company',
    'tech': ['Android', '|',  'Flask'],
    'link': 'https://github.com/IMFIL/Pegasus'
  },
  {
    'name': 'BusNow',
    'image': require('../images/busNow.png'),
    'width': '37%',
    'color': '#E9BBD8',
    'description': 'Geolocation based pebble application which lets users know when the next nearest bus is comming',
    'tech': ['Vanilla Javascript'],
    'link': 'https://github.com/IMFIL/BusNow'
  }
]

class ProjectsScreen extends Component {


  render(){
    return(
      <div className='projectsContainer'>
        {projects.map((i, index) => {
          return (
            <div style={{'height': '100%', 'overflow': 'hidden', 'backgroundColor': projects[index].color}} key={projects[index].name}>
              <div className='projectNameContainer'>
                  <p className='projectName'>
                    {projects[index].name}
                  </p>
                  <a rel="noreferrer" className='githubProjectLink' target="_blank" href={projects[index].link}>
                    <FontAwesome
                      name='github'
                      className='projectGitHubIcon'
                      style={{'fontSize': '22.5px', 'color': 'white'}}
                    />
                  </a>
              </div>
              <div className='projectTechContainer'>
                {projects[index].tech.map((i, techIndex) => {
                  return (
                    <p className='techName' key={projects[index].name+' '+projects[index].tech[techIndex]}>
                      {projects[index].tech[techIndex]}
                    </p>
                  )
                })

                }
              </div>
              <div className='projectContainer'>
                  <img className='imageClass' style={{'width': projects[index].width}} src={projects[index].image}/>
              </div>
              <p className={projects[index].name === 'BusNow' || projects[index].name === 'Pegasus' ? 'bottomPaddingLongText' : 'bottomPaddingShortText'}>
                {projects[index].description}
              </p>
            </div>
          )
        })
        }
      </div>
    )
  }
}


export default ProjectsScreen
