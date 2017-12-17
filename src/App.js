import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from './componentes/Header'
import SideNavbar from './componentes/SideNavbar'
import Routes from './Routes'
import Footer from './componentes/Footer'
import * as TodoActions from './actions'

const App = ({todos, actions}) => (
  <div>
  	<Header />
    
    <div className="container">
      <div className="row">
        <SideNavbar />
        <Routes />
      </div>
    </div>

    <Footer />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


