import React, {Component, Fragment} from 'react';
import Logo from './Logo.js';
import CreaturesButton from './CreaturesButton.js'
import RegionsDropDown from './RegionsDropDown.js'
import SearchBox from './SearchBox.js'


class NavBar extends Component{

   render(){
      return(
         <Fragment>
         <Logo/>
         <CreaturesButton/>
         <RegionsDropDown/>
         <SearchBox/>
         </Fragment>
      )
   }
}

export default NavBar;