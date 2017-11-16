import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const CoCHeader = ()=>{
	return(
	<Navbar className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">Clash Manager</Link>
			</Navbar.Brand>
			<Button>Menu</Button>
		</Navbar.Header>
		<Nav>
			<LinkContainer to="/buildings">
				<NavItem eventKey={1}>Add Buildings</NavItem>
			</LinkContainer>
			<LinkContainer to="/troops">			
				<NavItem eventKey={2}>Add Troops</NavItem>
			</LinkContainer>
			
			<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				<MenuItem eventKey={3.1}>Action</MenuItem>
				<MenuItem eventKey={3.2}>Another action</MenuItem>
				<MenuItem eventKey={3.3}>Something else here</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.4}>Separated link</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>
	)
};

export default CoCHeader;

