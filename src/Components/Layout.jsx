import React from 'react';
import CoCHeader from './CoCHeader';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home/Home';
import ManageTroop from './ManageTroop/ManageTroop';
import { ToastContainer } from 'react-toastify';

const Child = ({match}) => (
	<h3>DATA: {match.path}</h3>
);

const Layout = () => {
	return (
		<Router>
			<div>
				<ToastContainer
					autoClose={2000}
					newestOnTop
				/>
				<CoCHeader/>
				<Route exact path="/" component={Home}></Route>
				<Route path="/troops" component={ManageTroop}></Route>
				<Route path="/buildings" component={Child}></Route>
			</div>
		</Router>
	);
}

export default Layout;