import React, { Component } from 'react';

const CreatureDetail = (creature) => (

   <>
      <p>Name: {creature.name}</p>
      <p>Breed: {creature.breed}</p>
      <p>Description: {creature.description}</p>
   </>
)

export default CreatureDetail;
