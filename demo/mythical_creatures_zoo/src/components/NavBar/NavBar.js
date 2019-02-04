import React, { Component, Fragment } from 'react';
import Logo from './Logo.js';
import ExploreButton from './ExploreButton.js'
import RegionsDropDown from './RegionsDropDown.js'
import SearchBox from './SearchBox.js';
import './NavBar.css';
import { Link } from 'react-router-dom';


class NavBar extends Component {

   render() {
      return (
         <div className="navbar">

            <div className="child">
               <Link to ="/"><Logo/></Link>
            </div>

            <div className="child">
               <ExploreButton />
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
