import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import axios from 'axios'
import baseURL from '../config/server'

import '../styles/Contact.scss'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      telNo: '',
      message: ''
    }
  }

  /**
   * Correctly initializes state.
   * 
   * (This was done out of laziness (Or DRYness if I'm being charitable))
   */
  componentWillMount() {
    const obj = {}
    for (const input in this.state)
      obj[input] = { value: '', isValid: false }
    this.setState({ ...obj })
  }
  
  /**
   * If all inputs are valid, returns true
   */
  formReady = () => Object.values(this.state).every(input => input.isValid === true)

  /**
   * Determines whether the change in input is valid, then sets the validity of the corresponding input in state.
   * 
   * @param {String} name - the name of the input
   * @param {String} value - the user-inputted text
   */
  validateChange = (name, value) => {
    // result from previous validity test
    let prevResult = this.state[name].isValid
    // will store result from latest validity test
    let isValid

    // test the validity of the input
    // reflect change in state
    switch (name) {
      case 'firstName':
      case 'lastName':
        // result from latest validity test
        isValid = !/[0-9 !@#$%^&*()_+=[\]{};':"\\|,.<>/?]/g.test(value)
        // if not valid return false
        if (!isValid) return false
        // if the result has changed, re-setState
        if (prevResult !== isValid) {
          this.setState(prevState => {
            return {
              [name]: {
                ...prevState[name],
                isValid
              }
            }
          })
        }
        break
      case 'telNo':
        // result from latest validity test
        isValid = (value.match(/[0-9]/g) || []).length === 10

        // if new result does not match prev result, re-setState
        if (prevResult !== isValid) {
          this.setState(prevState => {
            return {
              [name]: {
                ...prevState[name],
                isValid
              }
            }
          })
        }
        break
      case 'email':
        // result from latest validity test
        isValid = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,11})$/.test(value)
        // if the result has changed, re-setState
        if (prevResult !== isValid) {
          this.setState(prevState => {
            return {
              [name]: {
                ...prevState[name],
                isValid
              }
            }
          })
        }
        break
      default:
        // result from latest validity test
        isValid = value.length > 10
        // if result differs from prev result, re-setState
        if (prevResult !== isValid) {
          this.setState(prevState => {
            return {
              [name]: {
                ...prevState[name],
                isValid
              }
            }
          })
        }
        break
    }
    return true
  }

  /**
   * Changes state.
   * 
   * @param {Event} e - deconstructed event object in the form { name, value } = event.target
   */
  handleChange = ({ target: { name, value }}) => {
    // if NOT valid exit procedure
    if (!this.validateChange(name, value)) return
    
    // reflect changes to input in state
    this.setState(prevState => {
      return {
        [name]: {
          ...prevState[name],
          value
        }
      }
    })
  }

  /**
   * If all inputs are valid sends data.
   * 
   * @param {Event} event - event object
   */
  handleSubmit = event => {
    // prevents page refresh
    event.preventDefault()

    // if state contains invalid inputs, exit procedure
    if (!this.formReady()) return

    // copy data from inputs
    const data = {}
    for (const input in this.state)
      data[input] = this.state[input].value

    // send data
    this.sendEmail(data)
  }

  /**
   * Sends email object to server.
   * 
   * @param {Object} data - inputs from user
   */
  sendEmail = data => {
    // create subject-line
    const subject = `New message from ${data.firstName} ${data.lastName}`
    // format message
    const content = `This is a message from ${data.firstName} ${data.lastName}, whose email is ${data.email} and whose phone number is ${data.telNo}.\n\n"${data.message}"`
    // store in data object
    const email = { subject, content }
    // post to api
    axios.post(`${baseURL}/email`, email)
      .then(res => console.log('Sent!', res))
      .catch(() => console.error('Error on send!!'))
  }

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
        <form onSubmit={ this.handleSubmit }>
          {/* Name */}
          <label id="name" htmlFor="firstName">Name
            <span className={firstName.isValid && lastName.isValid ? 'filled' : ''}>*</span>:
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={ firstName.value }
              onChange={ this.handleChange }
              placeholder="First"/>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={ lastName.value }
              onChange={ this.handleChange }
              placeholder="Last"/>
          </label>
          {/* Tel */}
          <label htmlFor="telNo">Phone
            <span className={telNo.isValid ? 'filled' : ''}>*</span>:
            <Masked
              value={ telNo.value }
              onChange={ this.handleChange }
              name="telNo"
              type="tel"
              mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="(333) 333-4444"/>
          </label>
          {/* Email */}
          <label htmlFor="email">Email
            <span className={email.isValid ? 'filled' : ''}>*</span>:
            <input
              type="email"
              id="email"
              name="email"
              value={ email.value }
              onChange={ this.handleChange }
              placeholder="random@person.org"/>
          </label>
          {/* Content of Message */}
          <label htmlFor="message">Message
            <span className={message.isValid ? 'filled' : ''}>*</span>:
            <textarea
              id="message"
              name="message"
              value={ message.value }
              onChange={ this.handleChange }
              placeholder="What's on your mind, friend?"/>
          </label>
          {/* Submit Button */}
          <label className="send" htmlFor="send">
            <input
              type="submit"
              id="send"
              name="send"
              value="Send"
              className={this.formReady() ? '' : 'inactive'}/>
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