import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './componentes/Home'
import TareasTrabajo from './componentes/TareasTrabajo'
import TareasEstudio from './componentes/TareasEstudio'
import TareasCasa from './componentes/TareasCasa'

const Routes = () => (
	
	 <Switch>
	   <Route exact path="/" component={Home} />
	   <Route path="/tareastrabajo" component={TareasTrabajo} /> 
       <Route path="/tareasestudio" component={TareasEstudio} />
       <Route path="/tareascasa" component={TareasCasa} />
	 </Switch>
	
);
export default Routes;