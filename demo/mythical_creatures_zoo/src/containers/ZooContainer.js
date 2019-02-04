import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import Main from '../components/Mains/Main.js';
import './ZooContainer.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import UsefulLinksMain from '../components/Mains/UsefulLinksMain.js';
import FAQMain from '../components/Mains/FAQMain.js';
import OurHistoryMain from '../components/Mains/OurHistoryMain.js';
import Logo from '../components/NavBar/Logo.js';


class ZooContainer extends Component {
   render() {
      return (
        <Router>
         <Fragment>
            <NavBar />
            <Route exact path="/" component={Logo}/>
            <br></br>
            <br></br>
            <Main />
            <br></br>
            <br></br>
            <Footer />
            <Route path="/FAQ" component={FAQMain}/>
            <Route path="/OurHistory" component={OurHistoryMain}/>
            <Route path="/Links" component={UsefulLinksMain}/>
         </Fragment>
         </Router>

      )
   }
}

export default ZooContainer;
