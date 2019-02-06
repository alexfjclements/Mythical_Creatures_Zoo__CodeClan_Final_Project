import React, { Component } from 'react';
import './NavBar.css';

// class RegionsDropDown extends Component{
//    render(){
//       return(
//          "This is the Regions DropDown!"
//       )
//    }
// }

const RegionsDropDown = ({onRegionSelected, creatures = [] }) => {
  const options = creatures.map((creature, index) => {
    return <option value={index} key={index}>{creature.originLocation}</option>
  })

  function handleChange(event) {
    onRegionSelected(event.target.value);
  }

  return (
    <select id="region-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a Region...</option>
      {options}
    </select>
  )
}

export default RegionsDropDown;