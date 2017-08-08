import React, { Component } from 'react';
import stateData from './stateData';

class CreateStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateNames : this.getStateNames()
    }
  }

  getStateNames() {
    let stateNames = [];
    stateData.forEach(function(state) {
      stateNames.push(state.name)
    });
    return stateNames;
  }

  fillDropDown(stateName) {
    return <option key={stateName}>{stateName}</option>
  }

  render() {
    return (
      <select>
        {this.state.stateNames.map(this.fillDropDown)}
      </select>
    )
  }

}

export default CreateStates;
