import React, {Component} from 'react';
import Enclosure from './Enclosure.js';

const EnclosureList = ({creatures = []})=>{
   const listEnclosures = creatures.map((creature, index) => {
      return (
         <li key={index} className="enclosure">
            <Enclosure
               enclosureNumber={creature.enclosure}
            >
            </Enclosure>
         </li>
      );
   });
}

export default EnclosureList;