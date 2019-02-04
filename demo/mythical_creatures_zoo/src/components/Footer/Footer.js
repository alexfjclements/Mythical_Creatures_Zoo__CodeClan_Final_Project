import React, { Component, Fragment } from 'react';
import SocialMedia from './SocialMedia.js'
import FAQ from './FAQ.js'
import OurHistory from './OurHistory.js'
import UsefulLinks from './UsefulLinks.js'
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
   render() {
      return (
         // <div className="footer">
         //    <div className="child">
         //       <SocialMedia />
         //    </div>
         //    <div className="child">
         //       <FAQ />
         //    </div>
         //    <div className="child">
         //       <OurHistory />
         //    </div>
         //    <div className="child">
         //       <UsefulLinks />
         //    </div>
         // </div>
         // <ul>
         // <li>
         // <SocialMedia/>
         // </li>
         // <li>
         // <Link to="/OurHistory">Our History</Link>
         // </li>
         // <li>
         // <Link to="/UsefulLinks">Useful Links</Link>
         // </li>
         // </ul>
         <div className="footer">
         
         <div className="child">
         <SocialMedia/>
         </div>

         <div className="child">
         <Link to="/FAQMain">FAQ</Link>
         </div>

         <div className="child">
         <Link to="/OurHistory">Our History</Link>
         </div>

         <div className="child">
         <Link to="/UsefulLinks">Useful Links</Link>
         </div>

         </div>
      );
   }


}

export default Footer;
