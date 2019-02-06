import React, { Component, Fragment } from 'react';
import CreatureDetail from './CreatureDetail.js';
import './Main.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCreature from './AddCreature.js';

const CreatureList = ({ creatures = [] }) => {

   const listCreatures = creatures.map((creature, index) => {
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
   return (
     <Fragment>
      <Route path="/AddCreature" component={AddCreature}></Route>
      <ul>
         {listCreatures}
      </ul>
      </Fragment>
   );

}




   export default CreatureList;
