import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { ENTREPRENEURS } from './shared/entrepreneurs';       // imports entrepreneurs.js

class App extends Component {
    constructor(props) {                   // now we have data from entrepreneurs.js inside of App state 
        super(props); 
        this.state = {
            entrepreneurs: ENTREPRENEURS
        };
    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Directory of Wisconsin Women Entrepreneurs</NavbarBrand>
                </div>
                </Navbar>
                <Directory entrepreneurs={this.state.entrepreneurs} />
            </div>
        );
    }
}

export default App;