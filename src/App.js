import React, { Component } from 'react'
import './App.css'
import './wisdompetlogo.svg'
import AptList from './AptList'
import AddAppointment from './AddAppointment'
import SearchAppointments from './SearchAppointments'


class MainInterface extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aptBodyVisible: true, //make false when fix code
      data: [
        {
          "id": 0,
          "petName": "Buffy",
          "ownerName": "Hassum Harrod",
          "aptDate": "2016-06-20 15:30",
          "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
        },
        {
          "id": 1,
          "petName": "Spot",
          "ownerName": "Constance Smith",
          "aptDate": "2016-06-24 08:30",
          "aptNotes": "This German Shepherd is having some back pain"
        },
        {
          "id": 2,
          "petName": "Goldie",
          "ownerName": "Barot Bellingham",
          "aptDate": "2016-06-22 15:50",
          "aptNotes": "This Goldfish has some weird spots in the belly"
        },
        {
          "id": 3,
          "petName": "Mitten",
          "ownerName": "Hillary Goldwyn",
          "aptDate": "2016-06-21 9:15",
          "aptNotes": "Cat has excessive hairballs"
        }
      ]
    }

  } //set inital state

  deleteMessage(id) {
    console.log('removing item at', id)

  }
//TO have form diplay/hide
//  toggleAddDisplay: function() {
//    let tempVisibility = !this.state.aptBodyVisible;
//    this.setState({
//      aptBodyVisible: tempVisibility
//    });
//  },

//addItem: function(tempItem) {
//  let tempApts = this.set.myAppointments;
//  tempApts.push(tempItem);
//  this.setState({
//    myAppointments:tempApts
//  });
//},

  render() {
    let filteredApts = this.state.data;
    filteredApts = filteredApts.map(function(item, index) {
      return(
        <AptList key={ index }
          singleItem = { item }
          whichItem = { item }
          onDelete = { this.deleteMessage } />
      )
    }.bind(this));

    return (
      <div className="interface">
        <AddAppointment
          bodyVisible = { this.state.aptBodyVisible }
          handleToggle = { this.toggleAddDisplay }
          addApt = { this.addItem }
        />
        <SearchAppointments />
        <ul className="item-list media-list">{filteredApts}</ul>
      </div>
    )
  }
}


export default MainInterface;
