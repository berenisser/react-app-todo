import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './componentes/Home'
import TareasTrabajo from './componentes/TareasTrabajo'

const Routes = () => (
	
	 <Switch>
	   <Route exact path="/" component={Home} />
	   <Route path="/tareastrabajo" component={TareasTrabajo} /> 
	 </Switch>
	
);
export default Routes;