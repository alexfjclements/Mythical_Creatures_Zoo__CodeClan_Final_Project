import React, { Component } from 'react';
import './NavBar.css';

class SearchBox extends Component {
   render() {
      return (
         <>
            
            <form className="form" id="addItemForm">
               <input
                  type="text"
                  className="input"
                  id="addInput"
                  placeholder="Enter query..."
               />
               <button className="button is-info" >
          Search
        </button>
      </form>
         </>
            );
      
         }
      }
      
export default SearchBox;