import React, {Component} from 'react';
import Enclosure from './Enclosure.js';

const EnclosureList = ({creatures = []})=>{
   const listEnclosures = creatures.map((creature, index) => {
      return (
         <li key={index} className="enclosure">
            <Enclosure
               creature={creature}
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