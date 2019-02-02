import React, {Component, Fragment} from 'react';
import SocialMedia from './SocialMedia.js'
import FAQ from './FAQ.js'
import OurHistory from './OurHistory.js'
import UsefulLinks from './UsefulLinks.js'

class Footer extends Component {
   render(){
      return(
         <Fragment>
         <SocialMedia/>
         <FAQ/>
         <OurHistory/>
         <UsefulLinks/>
         </Fragment>
      );
   }


}

export default Footer;