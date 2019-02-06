import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar.js';
import Footer from '../components/Footer/Footer.js';
import Main from '../components/Mains/Main.js';
import './ZooContainer.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsefulLinksMain from '../components/Mains/UsefulLinksMain.js';
import OurHistoryMain from '../components/Mains/OurHistoryMain.js';
import FAQMain from '../components/Mains/FAQMain.js';
import Logo from '../components/NavBar/Logo.js';
import EnclosureList from '../components/Mains/EnclosureList.js';
import RegionsDropDown from '../components/NavBar/RegionsDropDown.js';
import CreatureList from '../components/Mains/CreatureList';
import SearchBox from '../components/NavBar/SearchBox.js';
import Request from '../helpers/request.js';
import HomePage from '../components/Mains/HomePage.js';


class ZooContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      creaturesArray: [],
      enclosureArray: []
    };
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/mythicalCreatures')
    .then((data) => {
      this.setState({creaturesArray: data._embedded.mythicalCreatures})
    })
  }

  render() {
    return(
      <Router>
      <Fragment>
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <br></br>
      <br></br>
      <Main />
      {/* <Route path="/Explore" component={EnclosureList}/> */}
      <Route path="/Explore" render={() => <EnclosureList creaturesByEnclosure={this.state.enclosureArray} />}
      />
      {/* <Route path="/Region" component={RegionsDropDown} /> */}
      <Route path="/Region" render={() => <RegionsDropDown creatures={this.state.creaturesArray} />}
      />
      <Route path="/Search" component={SearchBox} />
      <Route path="/CreatureList" render={() => <CreatureList creatures={this.state.creaturesArray} />}
      />
      <br></br>
      <br></br>
      <Footer />
      <Route path="/FAQ" component={FAQMain} />
      <Route path="/OurHistory" component={OurHistoryMain} />
      <Route path="/UsefulLinks" component={UsefulLinksMain} />
      </Fragment>
      </Router>
    )
  }
}

export default ZooContainer;
