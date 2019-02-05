import React, {Component} from 'react';
import Enclosure from './Enclosure.js';

const EnclosureList = ({creaturesByEnclosure = []})=>{
   const listEnclosures = creaturesByEnclosure.map((enclosures, index) => {
      return (
         <li key={index} className="enclosure">
            <Enclosure
               enclosures={enclosures}
            >
            </Enclosure>
         </li>
      );
   });

   return (
      <ul>
         {listEnclosures}
      </ul>
   );
}

export default EnclosureList;