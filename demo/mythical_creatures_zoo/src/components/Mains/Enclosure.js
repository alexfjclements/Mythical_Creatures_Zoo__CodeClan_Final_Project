import React, { Component } from 'react';
import CreatureDetail from './CreatureDetail.js';

const Enclosure = ({ enclosures = [] }) => {

   const listCreaturesInEnclosure = enclosures.map((creature, index) => {
      return (
         <li key={index} className="creature_list">
            <CreatureDetail
               name={creature.name}
               breed={creature.breed}
               description={creature.description}
            >
            </CreatureDetail>
         </li>
      );
   });

   const presentEnclosure = (enclosures) => (
      <>
         <h4>Enclosure Number: {enclosures[0].enclosure}</h4>
         {listCreaturesInEnclosure}
      </>
   );


   return (
      <ul>
         {presentEnclosure(enclosures)}
      </ul>
   );
}


export default Enclosure;