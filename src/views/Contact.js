import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'

import '../styles/Contact.scss'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telNo: '',
      message: '',
    }
  }
  
  /**
   * Changes state
   * @param {Event} e - deconstructed event object in the form { name, value } = event.target
   */
  handleChange = ({ target: { name, value }}) => {
    if ((name === 'firstName' && /[-0-9 !@#$%^&*()_+=[\]{};':"\\|,.<>/?]/g.test(value)) ||
        (name === 'lastName' && /[0-9 !@#$%^&*()_+=[\]{};':"\\|,.<>/?]/g.test(value))) return
    this.setState({
      [name]: value
    })
  }

  // PHOLDER FOR ON FORM SUBMIT

  render() {
    const {
      firstName,
      lastName,
      email,
      telNo,
      message
    } = this.state
    return (
      <div className="Contact">
        <h2 className="header">Contact</h2>
        <p>Feel free to reach out with questions, thoughts, music recommendations..!</p>
        <form>
          {/* Name */}
          <label id="name" htmlFor="firstName">Name
            <span className={/^[-A-Za-z]{2,10}$/.test(firstName) && /^[-A-Za-z]{2,10}$/.test(lastName) ? 'filled' : ''}>*</span>:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              placeholder="First"/>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              placeholder="Last"/>
          </label>
          {/* Tel */}
          <label htmlFor="telNo">Phone:
            <Masked
              value={telNo}
              onChange={this.handleChange}
              name="telNo"
              type="tel"
              mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="(333) 333-4444"/>
          </label>
          {/* Email */}
          <label htmlFor="email">Email
            <span className={/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,11})$/.test(email) ? 'filled' : ''}>*</span>:
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="random@person.org"/>
          </label>
          {/* Content of Message */}
          <label htmlFor="message">Message
            <span className={message.length > 0 ? 'filled' : ''}>*</span>:
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={this.handleChange}
              placeholder="What's on your mind, friend?"/>
          </label>
          {/* Submit Button */}
          <label className="send" htmlFor="send">
            <input type="submit" id="send" name="send" value="Send"/>
          </label>
        </form>
      </div>
    )
  }
}


class Masked extends React.Component {
  onChange = event => {
    // set to empty string if a non-number is entered
    if ((event.target.value.match(/[0-9]/g) || []).length === 0) event.target.value = ''

    // set name to props.name
    event.target.name = this.props.name
    this.props.onChange(event)
  }
  render() {
    return (
      <MaskedInput
        type={this.props.type}
        mask={this.props.mask}
        value={this.props.value}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
      />
    )
  }
}