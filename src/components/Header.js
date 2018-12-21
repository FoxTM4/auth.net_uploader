import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
           <header id='header'>
          <Link to='/upload'> <button>Upload</button></Link>
           <Link to='/'><button>Login</button></Link>
               <div></div>
           </header>
        )
    }
}
export default Header;