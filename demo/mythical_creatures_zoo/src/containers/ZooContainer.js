import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';

class ZooContainer extends Component {
   render() {
      return (
         <Fragment>
            <NavBar />
            <Footer />
         </Fragment>
      )
   }
}

export default ZooContainer;