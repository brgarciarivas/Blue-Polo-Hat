import React from 'react';
import Base from './Base.jsx'
import api from '../scripts/api.js';



export default class LandingHeader extends Base{
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
					<div className='header'>
						<div className='flex-row header-2'>
								<img id='setmine-logo' src="https://s3.amazonaws.com/stredm/namecheap/setmine-logo-white.png?X-Amz-Date=20160411T054811Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=a9a4a089ea1a5bd95cee1923740ebe29ae237172ec5245bf37b3adf342757e5e&X-Amz-Credential=ASIAJH4QSFJFV4GZFL4A/20160411/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEP///////////wEaDHHJS/sodsDfWxYQxSLMAkzyTwmhNCyXL779pEKFtW0hZd73XPP3lENVN1FcPz2G5DhC53Ci7BbGZjJDaZexTgNFFzAYwkfXi/fAIQZX2PgNTGlue2C8W5ilOzpYZcbpwgIrEPPDmegPiWdiqhYI7pmz5d37EytSZJL9AZLyVCO93NuPtfvjYJpGNKegQxoctoREi23z7tK13FvDrf1g5D358h3KinosPtcARm3h%2B6rnzFOJ8eTixG%2BsA9i6RN5I0FNCoYZTXHdzD8zn3vkBumJnNWW2ioXMwT/mDURug4n0nAUkCSxPvwdwukd6irvk765iyzujFBBPlzS%2BxakgxdIapcgkEqE9AZi/Zvsl/GV0kheHOOJN2/fHBzKOemkWQ0ClVFkLidtHO6g5fKc72/tIGmLxz9ZdMQsD2bu0GfzFw7TtAZX0k38Ih28Mx3AZH6zN7vo/RuOLMk%2B/KIfIq7gF"/>
								<h1 id='setcoins-landing-header'>Setcoins</h1>
						</div>
						<h1 id='btc-value'>1  BTC  = ${this.state.btcValue}</h1>
					</div>
			)
		}
	}





