import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App.jsx';

module.export = {
	<Route path='/' component={Home}>
		<IndexRoute component={Home}/>
	</Route>	
}