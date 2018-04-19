import React, { Component } from 'react';
import './style/PersonalWebsite.css';
import Typography from 'material-ui/Typography';
import Drawer from 'material-ui/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import IconButton from 'material-ui/IconButton';
import WelcomeScreen from './WelcomeScreen'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PortraitIcon from '@material-ui/icons/Portrait';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';


class PersonalWebsite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  componentDidMount =() => {
    document.title = 'Filip Slatinac'
  }
  openDrawer = () => {
    this.setState({
      menuOpen: true
    })
  }
  render() {
    return (
      <div className="personalWebsite" >
        <NavBar openDrawer={this.openDrawer.bind(this)}/>
        <Drawer
          open={this.state.menuOpen}
          onClose={() => this.setState({menuOpen: false})}
          onOpen={() => this.setState({menuOpen: true})}
        >
          <div
            style={{height:'100%'}}
            tabIndex={0}
            role="button"
            onKeyDown={() => this.setState({menuOpen: false})}
          >
            <MenuDrawer closerMenu={() => this.setState({menuOpen: false})}/>
          </div>
        </Drawer>
        <Router>
          <div className='componentRenderingAreaContainer'>
            <div className='componentRenderingArea'>
              <Route exact path="/" render={(props) => <WelcomeScreen {...props}/>}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

class MenuDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onNavBarElementClick = (location) => {
    this.props.closerMenu()
  }

  render () {
    return (
      <div className='drawerStyle'>
        <List component="nav">
          <Tooltip id="tooltip-Home" title="Home" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Home' onClick={() => this.onNavBarElementClick('Home')}>
              <ListItemIcon>
                <HomeIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Work" title="Work" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Contact' onClick={() => this.onNavBarElementClick('Work')}>
              <ListItemIcon>
                <WorkIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Projects" title="Projects" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Projects' onClick={() => this.onNavBarElementClick('Home')}>
              <ListItemIcon>
                <ColorLensIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-AboutMe" title="Story" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='AboutMe' onClick={() => this.onNavBarElementClick('Home')}>
              <ListItemIcon>
                <PortraitIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Contact" title="Contact" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Contact' onClick={() => this.onNavBarElementClick('Home')}>
              <ListItemIcon>
                <ContactMailIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        </List>
      </div>
    )
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div style={{'width': '100%', 'height': '60px', 'position': 'relative', 'zIndex': '1'}}>
      <IconButton
          style={{'marginLeft': '5px', 'marginTop': '5px'}}
          onClick={() => {this.props.openDrawer()}}
        >
          <MenuIcon style={{'fontSize': '25px'}}/>
      </IconButton>
      </div>
    )
  }
}

export default PersonalWebsite;
