import React, { Component } from 'react'
import './App.css'
import './wisdompetlogo.svg'

class MainInterface extends Component {
  render() {
    return (
      <div className="interface">
        <h1>Pet Appointments</h1>
        <ul>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
    )
  }
}

export default MainInterface;
