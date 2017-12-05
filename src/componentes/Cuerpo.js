import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import TextoInput from './TextoInput';
import classnames from 'classnames'

class Cuerpo extends Component{	
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  state = {
    texto: ''
  }

  guardarTarea = () => {
    const { texto } = this.state

    if (texto.length !== 0) {
      this.props.addTodo(texto)
    }
  }

  onTextChange = e => {
    this.setState({
      texto: e.target.value.trim()
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="header">
		<Grid>
		    <Row className="show-grid">
		        <Col md={4} mdPush={4}>   
		        	<h1>todos</h1>     
        			
                <input className={
                  classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                  })}
                  type="text"
                  placeholder="¿Que tienes que hacer?"
                  autoFocus="true"
                  value={this.state.texto}
                  onChange={this.onTextChange}
                  /> 
                  
                <button id='crearTarea' onClick={this.guardarTarea}>Click!</button>    
		        </Col>
		    </Row>
		</Grid>            
     </div>
    )
  }
}

export default Cuerpo;