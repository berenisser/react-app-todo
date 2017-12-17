import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Items from './Items'
import PieTarea from './PieTarea'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constantes/TodoFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class LaSeccion extends Component  {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  despejado = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <span>
          <a onClick={actions.completeAll} className="marcar-todos">
            marcar todos
          </a>
        </span>
      )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <PieTarea completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.despejado}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <div className="offset-md-6 col-md-4">
            <div>       
              {this.renderToggleAll(completedCount)}
              <div>
                {filteredTodos.map(todo =>
                  <Items key={todo.id} todo={todo} {...actions} />
                )}
              </div>
              {this.renderFooter(completedCount)}
            </div>   
      </div>
    )
  }
}
export default LaSeccion;