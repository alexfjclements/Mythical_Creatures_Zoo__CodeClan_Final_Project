import React, { Component, Fragment } from 'react';
import Logo from './Logo.js';
import ExploreButton from './ExploreButton.js'
import RegionsDropDown from './RegionsDropDown.js'
import SearchBox from './SearchBox.js';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CreatureList from '../Mains/CreatureList.js';


class NavBar extends Component {

   render() {
      return (
         <div className="navbar">

            <div className="logo">
               <Link to ="/" className="navlink">
               <Logo/>
               </Link>
            </div>

            <div className="navchild">
               <Link to="/Explore" style={{ textDecoration: 'none' }} className="navlink">
               <ExploreButton />
               </Link>
            </div>

            <div className="navchild">
               <Link to="/CreatureList" style={{ textDecoration: 'none' }} className="navlink">
               CreatureList
               </Link>
            </div>

            <div className="navchild">
               <Link to="/Region" >
               <RegionsDropDown />
               </Link>
            </div>

            <div className="navchild" >
               <Link to="/Search" style={{ textDecoration: 'none' }} className="navlink">
               <SearchBox />
               </Link>
            </div >

         </div >


      )
   }
}

export default NavBar;
