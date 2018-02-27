import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import HbMap from './hbMap/hbMap.js';

class App extends Component {
  componentDidMount(){
    axios.post("/insertUser").then((data)=>{
      console.log(data);
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HbMap/>
      </div>
    );
  }
}

export default App;
