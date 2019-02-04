import React, {Component} from 'react';
import CreatureDetail from './CreatureDetail.js';

const CreatureList = ({banana, pinapple}) => {

     //  const listCreatures = banana.map((creature, index) => {
     //   return <li key={index}>{creature.name}</li>
     // });
      return(
         <h4>Creatures! {banana}</h4>
      )
   };

export default CreatureList;
