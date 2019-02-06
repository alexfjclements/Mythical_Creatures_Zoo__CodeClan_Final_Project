import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UsefulLinksMain extends Component {
   render() {
      return (
         <div className="container">
            <div className="usefullinks">
               <p>Wikipedia: Greek</p>
               <p>Edinburgh Zoo</p>
               <p><Link to="https://www.amazon.co.uk/Mythos-Greek-Retold-Stephen-Fry-ebook/dp/B071CN6W7T/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=">Stephen Fry's Mythos: ebook on Amazon.co.uk</Link></p>
               <p><Link to="http://www.bbc.co.uk/wales/history/sites/themes/myths.shtml">BBC: Welsh Myths and Legends</Link></p>
               <p><a href="www.bbc.co.uk/wales/history/sites/themes/myths.shtml" target="www.bbc.co.uk/wales/history/sites/themes/myths.shtml">test</a></p>
            </div>
         </div>
      )
   }
}


export default UsefulLinksMain;