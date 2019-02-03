import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import Main from '../components/Mains/Main.js';
import './ZooContainer.css';

class ZooContainer extends Component {
   render() {
      return (
         <Fragment>
            <NavBar />
            <br></br>
            <br></br>
            <Main />
            <br></br>
            <br></br>
            <Footer />
         </Fragment>
      )
   }
}

export default ZooContainer;