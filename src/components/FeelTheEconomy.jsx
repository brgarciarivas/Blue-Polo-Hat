import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';



export default class FeelTheEconomy extends Base{
		constructor(props){
			super(props)
			this.state = {
				btcValue: ''
			}
		}
		componentWillMount(){
			this.getBtc()
		}
		getBtc(){
			api.get('http://api.coindesk.com/v1/bpi/currentprice.json').then( res =>{
				
				var btcValue = res['bpi']['USD']['rate']
				var btcValue = btcValue.slice(0,6)
			

				this.setState({
					btcValue: btcValue
				})
			});
		}
	render(){
		return(
				<div className='feel-the-econ'>
					<div className='flex-column'>
						<div className=' landing-top flex-row'>
							<div className='set-flex landing-top-set'>
								<img id='setmine-logo'src="/img/setmine-logo-white.png"/>
								<h1 id='setcoins-landing-header'>Setcoins</h1>
							</div>
							<div className=' set-flex landing-top-btc'>
								<h1 id='btc-value'>1  BTC  = ${this.state.btcValue}</h1>
							</div>
						</div>
						<div className=' landing-bottom set-flex'>
							<div className='set-flex economy-container'>
								<div className='flex-column economy-container-pt2'>
									<p id='can-you-feel-it'>Feel The New Economy</p>
									<div className=' flex-column inequality'>
										<p>Because the solution to inequality is education,</p>
										<p>Were giving away 24 free Bitcoin</p>
									</div>	
								</div>	
							</div>
							<div className=' set-flex video-container'>
								<iframe id='video'  src="https://www.youtube.com/embed/VePpQBCbKBw" frameBorder="0" allowFullScreen>
								</iframe>
							</div>
						</div>
						<div className='flex-row button-container'>
							<div className='set-flex button-container-2'>
								<a href='https://www.google.com'>
								<button className='set-flex join-movement'>
								
									<i className='fa fa-facebook'></i>
									<p id='join-the-movement'>Join the Movement</p>
									
								</button>
								</a>
							</div>
							<div className='buffer set-flex'>
								{//buffer 
								}
							</div>
						</div>
					</div>
				</div>
			)
		}
	}





