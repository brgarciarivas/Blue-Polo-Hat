import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';
import FontAwesome from'react-fontawesome';


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
							<div className='flex-row landing-top-set'>
								<img id='setmine-logo'src="/img/setmine-logo-white.png"/>
								<h1 id='setcoins-landing-header'>Setcoins</h1>
							</div>
							<div className=' set-flex landing-top-btc'>
								<h1 id='btc-value'>1  BTC  = ${this.state.btcValue}</h1>
							</div>
						</div>
						<div className=' landing-bottom flex-row'>
							<div className='flex-column economy-container'>
								<p id='can-you-feel-it'>Feel The New Economy</p>
								<p>Because the solution to inequality is education,</p>
								<p>Were giving away 24 free Bitcoin</p>
								<div className='set-flex join-movement'>

									<p>Join the Movement</p>
									<i id='facebook' class="fa fa-facebook"></i>

								</div>
							</div>
							<div className=' set-flex video-container'>
								<iframe width="400" height="215" src="https://www.youtube.com/embed/VePpQBCbKBw" frameborder="0" allowfullscreen>
								</iframe>
							</div>
						</div>
					</div>
				</div>
			)
	}
}