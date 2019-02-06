import React, { Component, Fragment } from 'react';
import Logo from './Logo.js';
import ExploreButton from './ExploreButton.js'
import RegionsDropDown from './RegionsDropDown.js'
import SearchBox from './SearchBox.js';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CreatureList from '../Mains/CreatureList.js';


const NavBar = ({ onRegionSelected, creatures = [] }) => {
   return (
      <div className="navbar">

         <div className="child">
            <Link to="/">
               <Logo />
            </Link>
         </div>

         <div className="child">
            <Link to="/Explore">
               <ExploreButton />
            </Link>
         </div>

         <div className="child">
            <Link to="/CreatureList">
               CreatureList
               </Link>
         </div>

         <div className="child">
               <RegionsDropDown onRegionSelected={onRegionSelected} creatures={creatures}/>
         </div>

         <div className="child">
            <Link to="/Search">
               <SearchBox />
            </Link>
         </div >

      </div >


   )
}

export default NavBar;
