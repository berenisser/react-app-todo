import React, {Component} from 'react'
import PropTypes from 'prop-types'
//import { bindActionCreators } from 'redux'
//import { connect } from 'react-redux'

import Header from './componentes/Header'
import SideNavbar from './componentes/SideNavbar'
import Routes from './Routes'
import Footer from './componentes/Footer'
//import * as TodoActions from './actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <SideNavbar />
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    );
  }}

  export default App;