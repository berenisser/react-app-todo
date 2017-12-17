import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'

import TextoInput from './TextoInput'
import LaSeccion from './LaSeccion'


 const Home = ({todos, actions}) => (
    <div>
        <TextoInput addTodo={actions.addTodo} />
        <LaSeccion todos={todos} actions={actions} />
    </div>
  )
  
  Home.propTypes = {
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
  )(Home)
  