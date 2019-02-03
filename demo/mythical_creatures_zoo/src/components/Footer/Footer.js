import React, { Component, Fragment } from 'react';
import SocialMedia from './SocialMedia.js'
import FAQ from './FAQ.js'
import OurHistory from './OurHistory.js'
import UsefulLinks from './UsefulLinks.js'
import './Footer.css';

class Footer extends Component {
   render() {
      return (
         <div className="footer">
            <div className="child">
               <SocialMedia />
            </div>
            <div className="child">
               <FAQ />
            </div>
            <div className="child">
               <OurHistory />
            </div>
            <div className="child">
               <UsefulLinks />
            </div>
         </div>
      );
   }


}

export default Footer;