import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import './style/ContactScreen.css';
import Button from 'material-ui/Button';
import FormControl from 'material-ui/Form';

var validate = require("validate.js");

class ContactScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'name': '',
      'email': '',
      'message': '',
      'validEmail': false
    }
  }

  onFormChange = (type) => (event) => {
    var constraints = {
      from: {
        email: true
      }
    }
    if(type==='email') {
      if(validate({from: event.target.value}, constraints) !== undefined) {
        this.setState({[type]: event.target.value, 'validEmail': false})
      }
      else {
        this.setState({[type]: event.target.value, 'validEmail': true})
      }
    }
    else {
      this.setState({[type]: event.target.value})
    }
  }

  render() {
    return (
      <div className='contactScreenArea'>
        <Grid container spacing={24} className='gridContainer'>
          <Grid item xs={12} sm={6}>
            <div className='textContainer'>
              <Typography className='upperText' component="p">
                Speaking with other developers, designers, entrepreneurs and people in general is
                always refreshing. Contact me through this form if you have any recomendations, critiques
                or if you just want to say hello.
              </Typography>
              <Typography className='lowerText' component="p">
                If you are interested in my work, it is all posted on Github and if you wish to connect with me,
                feel free to send me an invitation through LinkedIn.
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} className='formGrid'>
            <div className='formContainer'>
              <form action="https://formspree.io/filipslatinac@gmail.com" method="POST">
                <div className='textFieldContainer'>
                  <TextField
                    id="name"
                    label="Name"
                    className='nameField'
                    onChange={this.onFormChange('name')}
                    value={this.state.name}
                    margin="normal"
                    />
                    <input type="hidden" name="name" value={this.state.name}/>
                    <TextField
                      type="email"
                      error={!this.state.validEmail}
                      id="email"
                      label="Email"
                      className='emailField'
                      onChange={this.onFormChange('email')}
                      value={this.state.email}
                      margin="normal"
                      />
                      <input type="hidden" name="email" value={this.state.email}/>
                      <TextField
                        id="message"
                        label="Message"
                        className='messageField'
                        multiline
                        rowsMax="10"
                        value={this.state.message}
                        onChange={this.onFormChange('message')}
                        margin="normal"
                      />
                      <input type="hidden" name="message" value={this.state.message}/>
                    <div>
                        <input type="hidden" name="_subject" value="contact_page"/>
                        <Button variant='raised' type="submit" disabled={!this.state.validEmail} value="Send">Send</Button>
                    </div>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }

}

export default ContactScreen
