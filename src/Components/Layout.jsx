import React, {Component} from 'react';
import CoCHeader from './CoCHeader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home'
import ManageTroop from './ManageTroop/ManageTroop'
const Child = ({match}) => (
	<h3>DATA: {match.path}</h3>
)

class Layout extends Component {
	render() {
		return (
			<Router>
				<div>
					<CoCHeader/>
					<Route exact path="/" component={Home}></Route>
					<Route path="/troops" component={ManageTroop}></Route>
					<Route path="/buildings" component={Child}></Route>
				</div>
			</Router>
		)
	}
}

export default Layout;