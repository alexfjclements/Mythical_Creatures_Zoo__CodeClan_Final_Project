import React, { Component } from 'react';
import AnimalList from './AnimalList';
import FAQMain from './FAQMain';
import UsefulLinksMain from './UsefulLinksMain';
import './Main.css';

class Main extends Component {
   render() {
      return (
         <div className="main">
            <AnimalList />
         </div>
      )
   }
}

export default Main;