import React, { Component } from 'react'
import axios from 'axios'

export default class Registration extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    registrationError: ''
  }

  handleSubmit = (event) => {
    const { email, password, password_confirmation } = this.state
    event.preventDefault()
    axios.post('http://localhost:3001/registrations', {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    }, {
      withCredentials: true
    }).then(response => {
      console.log('registrations', response);
    }).catch(error => {
      console.log('error', error);
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange} required />
          <input type="password" name="password" placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
          <input type="password" name="password_confirmation" placeholder='Confirm Password' value={this.state.password_confirmation} onChange={this.handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
