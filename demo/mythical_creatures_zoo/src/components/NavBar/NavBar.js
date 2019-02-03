import React, { Component, Fragment } from 'react';
import Logo from './Logo.js';
import CreaturesButton from './CreaturesButton.js'
import RegionsDropDown from './RegionsDropDown.js'
import SearchBox from './SearchBox.js';
import './NavBar.css';


class NavBar extends Component {

   render() {
      return (
         <div className="navbar">

            <div className="child">
               <Logo />
            </div>
            <div className="child">
               <CreaturesButton />
            </div>

            <div className="child">
               <RegionsDropDown />
            </div>

            <div className="child">
               <SearchBox />
            </div >
         </div >

      
      )
   }
}

export default NavBar;