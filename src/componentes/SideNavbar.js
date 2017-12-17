import React, { Component } from 'react';
import { Link } from 'react-router-dom';
	

const SideNavbar = () => (
	<div>
		
		<div className="col col-md-3">
			<ul className="nav nav-pills nav-stacked">
				<li className="active"><Link to="/">Crear Tarea</Link></li>
				<li><Link to="/tareastrabajo">Tareas del Trabajo <span className="badge">4</span></Link></li>
				<li><Link to="/tareasestudio">Tareas de Estudio</Link></li>
				<li><Link to="/tareascasa">Tareas de Casa</Link></li>
			</ul>
		</div>
 		
   </div>
);

export default SideNavbar;