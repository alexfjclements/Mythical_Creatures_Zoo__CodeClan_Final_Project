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
            <Logo className="logo"/>
            <CreaturesButton />
            <RegionsDropDown />
            <SearchBox />
         </div>
      )
   }
}

export default NavBar;