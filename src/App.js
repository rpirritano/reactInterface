import React, { Component } from 'react'
import './App.css'
import './wisdompetlogo.svg'

class MainInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {title: 'Appointments', show: true}
  } //set inital state

  render() {
    let showTitle;
    this.state.show ? showTitle = 'New' + ' ' : null

    let displayList = {
      display: this.state.show ? 'block':'none',
      color: 'red'
    }


    return (
      <div className="interface">
        <h1>{ showTitle }
          { this.state.title }</h1>
        <ul style={displayList}>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
    )
  }
}

export default MainInterface;
