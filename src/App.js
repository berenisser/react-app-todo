import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './componentes/Header'
import TextoInput from './componentes/TextoInput'
import LaSeccion from './componentes/LaSeccion'
import Footer from './componentes/Footer'
import * as TodoActions from './actions'

const App = ({todos, actions}) => (
  <div>
  	<Header />
    <TextoInput addTodo={actions.addTodo} />
    <LaSeccion todos={todos} actions={actions} />
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


