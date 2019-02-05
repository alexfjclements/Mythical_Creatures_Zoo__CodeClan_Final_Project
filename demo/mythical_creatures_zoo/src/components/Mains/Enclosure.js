import React, { Component } from 'react';
import CreatureList from './CreatureList.js';

const Enclosure = ({enclosure}) => {
   return (
   <>
      <h4>EnclosureNumber: {enclosure[0].enclosure}</h4>
   </>
   );
}


export default Enclosure;