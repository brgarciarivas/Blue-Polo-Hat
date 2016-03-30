import React from 'react';
import Base from './Base.jsx';
import LandingPage from './LandingPage.jsx';

export default class Home extends Base {
	constructor(props) {
		super(props)
		
	}
	



	render() {
	
		return (
			<div id="home">
				<LandingPage />
			</div>
		)
	}
}
