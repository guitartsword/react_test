import React, { Component } from 'react';
import {FormGroup, Radio, Button, ControlLabel, FormControl} from 'react-bootstrap';
import th1 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall1.png'
import th2 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall2.png'
import th3 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall3.png'
import th4 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall4.png'
import th5 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall5.png'
import th6 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall6.png'
import th7 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall7.png'
import th8 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall8.png'
import th9 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall9.png'
import th10 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall10.png'
import th11 from '../../../assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall11.png'

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
		const thLevels = [1,2,3,4,5,6,7,8,9,10,11].map((value)=>{
			return (
				<Radio key={value} name="thlevel" value={value} inline checked={this.state.thlevel==value?"checked":""}>
					{value}
				</Radio>
			)
		});
		const thImage = [th1,th2,th3,th4,th5,th6,th7,th8,th9,th10,th11];
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
						<img src={thImage[this.state.thlevel-1]} alt=""/>
						<div>{thLevels}</div>
					</FormGroup>
					<Button type="submit">Update Data</Button>
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
		this.setState({
			[event.target.name]:event.target.value
		});
	}
}

export default Home;