import React, { Component } from 'react';
import EnclosureList from './EnclosureList';
import FAQMain from './FAQMain';
import UsefulLinksMain from './UsefulLinksMain';
import OurHistoryMain from './OurHistoryMain';
import './Main.css';

class Main extends Component {
   render() {
      return (
         <div className="main">
            <EnclosureList />
         </div>
      )
   }
}

export default Main;
