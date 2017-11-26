import React, { Component } from 'react';
import './App.css';
import Header from './componentes/Header';
import Cuerpo from './componentes/Cuerpo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cuerpo />
      </div>
    );
  }
}

export default App;
