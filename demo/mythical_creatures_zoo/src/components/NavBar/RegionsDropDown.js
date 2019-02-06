import React, { Component } from 'react';
import './NavBar.css';
import _ from 'lodash';

const RegionsDropDown = ({ onRegionSelected, creatures = [] }) => {

  let getUniqueRegions = [];

  const getRegions = creatures.map((creature) => {
    return creature.originLocation;
  })

  getUniqueRegions = _.uniqBy(getRegions, (region) => {
    return region;
  })


  const options = getUniqueRegions.map((region, index) => {
    return <option value={region} key={index}>{region}</option>
  })

  function handleChange(event) {
    onRegionSelected(event.target.value);
  }

  return (
    <select id="region-selector" onChange={handleChange} defaultValue="default">
      <option value="default">All Regions</option>
      {options}
    </select>
  )
}

export default RegionsDropDown;