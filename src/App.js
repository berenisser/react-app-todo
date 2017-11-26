import React, { Component } from 'react';
import './App.css';
import Header from './componentes/Header';
import Cuerpo from './componentes/Cuerpo';
import Footer from './componentes/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cuerpo />
        <Footer />
      </div>
    );
  }
}

export default App;
