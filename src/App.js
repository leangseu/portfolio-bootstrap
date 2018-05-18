import React, { Component } from 'react';
import SideBar from './components/SideBar';
import Contents from './components/Contents';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="d-flex h-100" id="app">
          <SideBar />
          <Contents />
      </div>
    );
  }
}

export default App;
