import React, { Component } from 'react';
import stateData from './stateData';

class CreateStates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateNames: this.getStateNames(),
      abbreviation: '',
      selectedState: 'Alabama'
    }

    this.getAbbreviation = this.getAbbreviation.bind(this);
    this.updateSelectedState = this.updateSelectedState.bind(this);
  }

  getStateNames() {
    let stateNames = [];
    stateData.forEach(function(state) {
      stateNames.push(state.name)
    });
    return stateNames;
  }

  getAbbreviation(e) {
    e.preventDefault();
    let selectedState = this.state.selectedState;
    let currentState = stateData.filter(function(state) {
      return (state.name === selectedState)
    });
    let abbr = currentState[0]['alpha-2'];
    this.setState({
      abbreviation : abbr
    });
  }

  fillDropDown(stateName) {
    return <option value={stateName} key={stateName}>{stateName}</option>
  }

  updateSelectedState(e) {
    this.setState({selectedState: e.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <select onChange={this.updateSelectedState}>
            {this.state.stateNames.map(this.fillDropDown)}
          </select>
          <input type="submit" value="See Abbreviation" onClick={this.getAbbreviation}></input>
          <p>{this.state.abbreviation}</p>
        </form>
      </div>
    )
  }
}

export default CreateStates;
