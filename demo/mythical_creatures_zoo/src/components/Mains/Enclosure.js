import React, { Component } from 'react';
import CreatureList from './CreatureList.js';

const Enclosure = ({creature}) => {
   return (
   <>
      <p>EnclosureNumber: {creature.enclosure}</p>
   </>
   );
}


export default Enclosure;