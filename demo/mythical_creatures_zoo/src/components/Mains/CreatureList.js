import React, {Component} from 'react';
import CreatureDetail from './CreatureDetail.js';

const CreatureList = ({creatures = []}) => {

      const listCreatures = creatures.map((creature, index) => {
       return <li key={index}>{creature.name}</li>
     });
      return(
         <div>
         <h4>Creatures!</h4>
         <p>{listCreatures}</p>
         </div>
      )
   };

export default CreatureList;
