import React, { Component } from 'react';
import './Main.css';

const CreatureDetail = (creature) => (

   <div className="creature">
      <p>Name: {creature.name}</p>
      <p>Breed: {creature.breed}</p>
      <p>Description: {creature.description}</p>
   </div>
)

export default CreatureDetail;
