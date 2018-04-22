import React, { Component } from 'react';
import './style/PersonalWebsite.css';
import Drawer from 'material-ui/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import IconButton from 'material-ui/IconButton';
import WelcomeScreen from './components/WelcomeScreen'
import WorkScreen from './components/WorkScreen'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import List, { ListItem, ListItemIcon } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

class PersonalWebsite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'menuOpen': false,
      'width': window.innerWidth,
      'height':0
    }
  }

  updateDimensions = () => {
    this.setState({'width': window.innerWidth, 'height': window.innerHeight})
  }

  componentWillMount() {
    this.updateDimensions
}
  componentDidMount() {
    document.title = 'Filip Slatinac'
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.menuOpen == !this.state.menuOpen) {
      return true
    }

    else if(nextState.width <= 1000 && this.state.width > 1000 || nextState.width > 1000 && this.state.width <= 1000) {
      this.props.toggleParticles(nextState.width > 1000)
      return true
    }

    return false
  }

  openDrawer = () => {
    this.setState({
      menuOpen: true
    })
  }

  render() {
    return (
      <div className="personalWebsite" >

        {this.state.width > 1000 &&
            <MenuDrawer drawerStyle='drawerStyle'/>
        }

        {this.state.width <= 1000 &&
            <NavBar openDrawer={this.openDrawer.bind(this)}/>
        }

        {this.state.width <= 1000 &&
          <Drawer
          open={this.state.menuOpen}
          onClose={() => this.setState({menuOpen: false})}
          >
            <div
              style={{height:'100%'}}
              tabIndex={0}
              role="button"
              onKeyDown={() => this.setState({menuOpen: false})}
            >
              <MenuDrawer drawerStyle='drawerStyleMobile' closerMenu={() => this.setState({menuOpen: false})}/>
            </div>
          </Drawer>
        }

        <div className='componentRenderingAreaContainer'>
          <Router history={history}>
            <div className='componentRenderingArea'>
              <Route exact path='/' render={(props) => <WelcomeScreen {...props}/>}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

class MenuDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {'location': ''}
  }

  onNavBarElementClick = (location) => {
    if(this.props.closerMenu !== undefined) {
      this.props.closerMenu()
    }
    this.setState({'location':location})
    history.replace(location);
  }

  render () {
    return (
      <div className={this.props.drawerStyle}>
        <List component="nav">
          <Tooltip id="tooltip-Home" title="Home" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Home' onClick={() => this.onNavBarElementClick('/')}>
              <ListItemIcon>
                <HomeIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Work" title="Work" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Contact' onClick={() => this.onNavBarElementClick('/work')}>
              <ListItemIcon>
                <WorkIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Projects" title="Projects" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Projects' onClick={() => this.onNavBarElementClick('/projects')}>
              <ListItemIcon>
                <ColorLensIcon className='menuIcons'/>
              </ListItemIcon>
            </ListItem>
          </Tooltip>
          <Tooltip id="tooltip-Contact" title="Contact" placement="left-start" className='toolTipText'>
            <ListItem button style={{marginBottom:'10px'}} aria-label='Contact' onClick={() => this.onNavBarElementClick('/contact')}>
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
      <div style={{'position': 'relative', 'zIndex': '1'}}>
      <IconButton
          style={{'marginLeft': '5px', 'marginTop': '5px'}}
          onClick={() => {this.props.openDrawer()}}
        >
          <MenuIcon style={{'fontSize': '25px', 'color': '#262626'}}/>
      </IconButton>
      </div>
    )
  }
}

export default PersonalWebsite;
