import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory , router} from 'react-router';
import routes from './routes.jsx';

var bodyMount = doucment.getElementById('body-mount-point');

ReactDOM.render(
		<Router history={browserHistory}>
			{routes}
		</Router>
		,bodyMount);