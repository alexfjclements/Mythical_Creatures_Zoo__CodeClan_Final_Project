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
<<<<<<< HEAD
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
=======
            <Logo className="logo"/>
            <CreaturesButton />
            <RegionsDropDown />
            <SearchBox />
         </div>
>>>>>>> 60254cc52bf191b9a440eb50f3fc92ce8d0f2e01
      )
   }
}

export default NavBar;