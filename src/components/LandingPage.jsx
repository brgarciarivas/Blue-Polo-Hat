import React from 'react';
import Base from './Base.jsx';
import FeelTheEconomy from './FeelTheEconomy.jsx';
import LandingHeader from './LandingHeader.jsx';

export default class LandingPage extends Base {
	render(){
		return(
				<div id='landing-page'>
					<LandingHeader/>
					<FeelTheEconomy />
					
					<div className='button-container'>
						<div className='set-flex join-movement'>
							<i className='fa fa-facebook'></i>
							<p id='join-the-movement'>Join the Movement</p>
						</div>
						
						
					</div>
				</div>
			)
	}
}