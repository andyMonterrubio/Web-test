import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Elements from './components/items/Elements'
import Search from './components/items/Search'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    elements: [],
    loading: false
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
