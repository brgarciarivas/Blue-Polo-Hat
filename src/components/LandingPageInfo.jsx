import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';



export default class LandingPageInfo extends Base{
		
	render(){
		return(
					<div className='landing-page-info set-flex'>
						<div className='landing-info-container'>
							<div className='info-tile'>
								<p>You’re missing the point of Bitcoin if you feel left out. You can be as involved as you want to be, just go make something happen. Find something you think needs doing, recruit some people to help if you need help, and do it. Are you waiting for an invitation or permission from somebody? — Gavin Andresen, Lead Developer for Bitcoin.
								</p>
								<hr className='hr'/>
							</div>
							<div className='info-tile'>
							<p>  head bussa</p>
							<hr className='hr'/>
							</div>
							<div className='info-tile'>
							<p>you </p>
							<hr className='hr'/>
							</div>
							
						</div>
					</div>
			)
		}
	}



