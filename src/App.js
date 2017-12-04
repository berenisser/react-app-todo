import React, { Component } from 'react';
import './App.css';
import Header from './componentes/Header';
import Routes from './Routes';
import Footer from './componentes/Footer';
import Side from './componentes/Side';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        	<div className="row">
        		<Side />
        		<Routes />
        	</div>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default App;
