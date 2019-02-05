import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import Main from '../components/Mains/Main.js';
import './ZooContainer.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import UsefulLinksMain from '../components/Mains/UsefulLinksMain.js';
import OurHistoryMain from '../components/Mains/OurHistoryMain.js';
import FAQMain from '../components/Mains/FAQMain.js';
import Logo from '../components/NavBar/Logo.js';
import EnclosureList from '../components/Mains/EnclosureList.js';
import RegionsDropDown from '../components/NavBar/RegionsDropDown.js';
import CreatureList from '../components/Mains/CreatureList';
import SearchBox from '../components/NavBar/SearchBox.js';


class ZooContainer extends Component {

   constructor(props) {
      super(props);
      this.state = {
         creaturesArray: [
            {
               id: 1,
               name: "Daffyd",
               breed: "Afanc",
               gender: "Male",
               origin_location: "British Isles",
               description: "Lake monster, looks like a platypus on steroids",
               enclosure: 1,
               image: "https://vignette.wikia.nocookie.net/cryptidz/images/8/86/Afanc.jpg/revision/latest?cb=20140422220620"
            },
            {
               id: 2,
               name: "Peter",
               breed: "Griffin",
               gender: "Female",
               origin_location: "Greece",
               description: "The griffin, griffon, or gryphon is a legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle; and sometimes an eagle's talons as its front feet.",
               enclosure: 2,
               image: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f8/Griffin.png/revision/latest?cb=20170413064633"
            },
            {
               id: 3,
               name: "Argos",
               breed: "Giant",
               gender: "Male",
               origin_location: "Greece",
               description: "Many-eyed giant, also known as Argus Panoptes",
               enclosure: 2,
               image: "https://www.theoi.com/image/L11.2ArgosPanoptes.jpg"
            }
         ]
      };
   }

   render() {
      return (
         <>

        <Router>
         <Fragment>
            <NavBar />
            <Route exact path="/" component={Logo}/>
            <br></br>
            <br></br>
            <Main />
            {/* <Route path="/Explore" component={EnclosureList}/> */}
            <Route path="/Explore" render={() => <EnclosureList creatures={this.state.creaturesArray}/>}
            />
            <Route path="/Region" component={RegionsDropDown}/>
            <Route path="/Search" component={SearchBox}/>
            <Route path="/CreatureList" render={() => <CreatureList creatures={this.state.creaturesArray}/>}
            />
            <br></br>
            <br></br>
            <Footer />
            <Route path="/FAQ" component={FAQMain}/>
            <Route path="/OurHistory" component={OurHistoryMain}/>
            <Route path="/UsefulLinks" component={UsefulLinksMain}/>
         </Fragment>
         </Router>
         </>

      )
   }
}

export default ZooContainer;
