import React from 'react';
import Base from './Base.jsx';
import FeelTheEconomy from './FeelTheEconomy.jsx';

export default class LandingPage extends Base {
	render(){
		return(
				<div id='landing-page'>
						<div className='landing-page-background'>
							<FeelTheEconomy />
						</div>
						<div className='landing-page-info'>
							<p>we finna get lit out here fam</p>
						</div>
				</div>
			)
	}
}