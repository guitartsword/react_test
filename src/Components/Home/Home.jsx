import React, { Component } from 'react';
import {FormGroup, Button, ControlLabel, FormControl} from 'react-bootstrap';
import requests from 'Services/Requests'
const clash = new requests('http://138.68.228.152/');

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = ({
			username: localStorage.getItem('username') || '',
			thlevel: localStorage.getItem('thlevel') || 1,
			tag: '',
			player_data: {}
		});
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		const thImage = '/assets/Buildings/Resource_Buildings/Town_Hall';
		const level = this.state.player_data.townHallLevel || 1;
		const playerName = this.state.player_data.name || ""
		return (
			<div>
				<h1>{playerName}</h1>
				<form onSubmit={this.handleSubmit}>
					<FormGroup onChange={this.handleInputChange}>
						<ControlLabel>TownHall Level: {level}</ControlLabel>
						<div>
							<img src={`${thImage}/Town_Hall${level}.png`} alt=""/>
						</div>
					</FormGroup>
					<FormGroup>
						<ControlLabel>{'Tag'}</ControlLabel>
						<FormControl
							type="text"
							placeholder="#h1h2h3h4"
							value={this.state.tag}
							name='tag'
							onChange={this.handleInputChange}/>
					</FormGroup>
					<Button type="submit" bsStyle="primary">GET Data</Button>
				</form>
			</div>
		);
	}
	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.tag)
		clash.get(`player/${this.state.tag}`)
			.then(response => response.json())
			.then(json=>this.setState({
				player_data:json
			}))
			.catch(err=>this.setState({
				player_data:{
					error:err
				}
			}));
	}
	handleInputChange(event){
		this.setState({
			[event.target.name]:event.target.value
		});
	}
}

export default Home;