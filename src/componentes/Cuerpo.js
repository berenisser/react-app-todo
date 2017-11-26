import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import TextoInput from './TextoInput';

class Cuerpo extends Component{	
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  guardarTarea = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <div className="header">
		<Grid>
		    <Row className="show-grid">
		        <Col md={4} mdPush={4}>   
		        	<h1>todos</h1>     
        			<TextoInput newTodo
            			onSave={this.guardarTarea}
            			placeholder="¿Que tienes que hacer?" />
		        </Col>
		    </Row>
		</Grid>            
     </div>
    )
  }
}

export default Cuerpo;