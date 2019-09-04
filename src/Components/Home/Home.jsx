import React, { Component } from 'react';
import requests from 'Services/Requests';
import { toast } from 'react-toastify';
const clash = new requests('http://138.68.228.152/');

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = ({
			username: localStorage.getItem('username') || '',
			thlevel: localStorage.getItem('thlevel') || 1,
			tag: '',
			playerData: {}
		});
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	render() {
		const thImage = '/assets/Buildings/Resource_Buildings/Town_Hall/Town_Hall';
		const level = this.state.playerData.townHallLevel || 1;
		const playerName = this.state.playerData.name || "";
		return (
			<header className="masthead">
			<div className="container h-50">
			  <div className="row h-100">
				<div className="col-lg-8 my-auto">
				  <div className="header-content mx-auto">
					<h1 className="mb-5">Clash of Clans Manager</h1>
					<h1 className="mb-5">{playerName}</h1>
					<div>Find out your war weigth, just input your player or clan tag!</div>
					<div className="my-4 input-group">
						<span className="input-group-addon" id="basic-addon1">id</span>
						<input
							name="tag"
							type="text"
							value={this.state.tag}
							onChange={this.handleInputChange}
							className="form-control"
							placeholder="#h4h3h2h1"
							aria-label="Username"
							aria-describedby="basic-addon1"/>
					</div>
					
				  </div>
				</div>
				<div className="col-lg-4 my-auto">
				  <div className="">
					<div className="">
					  <div className="device">
						<div className="screen">
						  
						  <div>
							  <img src={`${thImage}${level}.png`} className="img-responsive d-block mx-auto" alt=""/>
						  </div>
						  <div className="btn btn-outline btn-xl my-1 d-block mx-auto pointer" name="player" onClick={this.handleSubmit}>Player Search!</div>
						  <div className="btn btn-outline btn-xl my-1 d-block mx-auto pointer" name="clan" onClick={this.handleSubmit}>Clan Search!</div>
						</div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </header>
		);
	}
	handleSubmit(event){
		event.preventDefault();
		const eventName = event.target.attributes.name.value;
		const tag = this.state.tag;
		if (!tag){
			toast.error("Input a tag");
			return;
		}
		clash.get(`${eventName}/${encodeURIComponent(tag)}`)
			.then(response => response.json())
			.then(json=>this.setState({
				playerData:json
			}))
			.catch(err=>this.setState({
				playerData:{
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