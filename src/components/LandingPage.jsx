import React from 'react';
import Base from './Base.jsx';

export default class LandingPage extends Base {
	render(){
		return(
				<div id='landing-page'>
					<div className='landing-page-background'>
						<img id='landing-page-background'src='../img/background.png'/>
					</div>
					<div>
						<p>we finna get lit out here fam</p>
					</div>
				</div>
			)
	}
}