import React, {Component} from 'react';
import Enclosure from './Enclosure.js';

const EnclosureList = ({creaturesByEnclosure = []})=>{
   const listEnclosures = creaturesByEnclosure.map((enclosure, index) => {
      return (
         <li key={index} className="enclosure">
            <Enclosure
               enclosure={enclosure}
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