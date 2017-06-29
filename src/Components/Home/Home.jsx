import React, { Component } from 'react';
import {FormGroup, Button, ControlLabel, FormControl} from 'react-bootstrap';


class Home extends Component{
	constructor(props) {
		super(props);
		this.state = ({
			username: localStorage.getItem('username'),
			thlevel: localStorage.getItem('thlevel')
		});
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		const thImage = '/assets/Buildings/Resource_Buildings/Town_Hall';
		const level = this.state.thlevel || 1;
		const thLevels = [1,2,3,4,5,6,7,8,9,10,11].map((value)=>{
			return (
				<option key={value} name="thlevel" value={value}>
					Nivel {value}
				</option>
			)
		});
		return (
			<div>
				<h1>{this.state.username}</h1>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
						<ControlLabel>{'Username'}</ControlLabel>
						<FormControl
							type="text"
							placeholder="Enter username"
							value={this.state.username}
							name='username'
							onChange={this.handleInputChange}/>
					</FormGroup>
					<FormGroup onChange={this.handleInputChange}>
						<ControlLabel>TownHall Level</ControlLabel>
						<img src={`${thImage}/Town_Hall${level}.png`} alt=""/>
						<div>
							<FormControl name="thlevel"
								onChange={this.handleInputChange}
								value={this.state.thlevel}
								componentClass="select"
								placeholder="Nivel">
								{thLevels}
							</FormControl>
						</div>
					</FormGroup>
					<Button type="submit" bsStyle="primary">Update Data</Button>
				</form>
			</div>
		);
	}
	handleSubmit(event){
		event.preventDefault();
		localStorage.setItem('username',this.state.username);
		localStorage.setItem('thlevel',this.state.thlevel);
		alert(`${this.state.username} townhall level is ${this.state.thlevel}`)
	}
	handleInputChange(event){
		console.log(event.target.value);
		console.log(event.target.name);
		this.setState({
			[event.target.name]:event.target.value
		});
	}
}

export default Home;