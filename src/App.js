import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Elements from './components/items/Elements'
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
          
        </div>
      </div>
    );
  }
}

export default App;
