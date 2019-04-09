import React, { Component } from 'react'

// import '../styles/Contact.scss

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  }
  
  handleChange = ({ target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  // PHOLDER FOR ON FORM SUBMIT

  render() {
    return (
      <div className="Contact">
        <h3 className="header">Contact</h3>
        <p>Send a message below!</p>
        <form>
          <label for="firstName">First Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}/>
          </label>
          <label for="lastName">Last Name:
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}/>
          </label>
          <label for="email">Email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </label>
          <label for="message">Message:
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}/>
          </label>
          <label for="submit">Submit!
            <input type="submit" id="submit" name="submit"/>
          </label>
        </form>
      </div>
    )
  }
}
