import React, { Component } from 'react';
import { Panel, Button, Grid, Row, Col, FormControl, Form } from 'react-bootstrap';

class Cuerpo extends Component{
	

	render(){
		return (
			<div>
				<p className="App-intro">
		        	Hola ingresa tus tareas
		        </p>
		        <Grid>
		        	<Row className="show-grid">
		        		<Col md={6} mdPush={3}>
		        			<Panel header="Tarea Nueva" bsStyle="success">
						      Panel content
						      	<Form>
						      		<FormControl placeholder='Ingresa tu tarea' />
						      	</Form>
						    </Panel>
		        		</Col>
		        	</Row>
		        </Grid>
         		
		   </div>
		);
	}
}

export default Cuerpo;