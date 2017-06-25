import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iise from './Services/App'
import requests from './Services/Requests'
const iiseService = new iise();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      count: 0,
      clanName: 'GG EZ'
    };
    this.count = 0;
    this.handleChangeClanName=this.handleChangeClanName.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleChangeClanName(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event){
    event.preventDefault();
    const filters = {
      'name':this.state.clanName
    };
    iiseService.searchClan(filters).then(json => {
      console.log(json);
      this.setState = {
        clanList: <p>obtained:{json}</p>
      }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>By the way, the time is: <code>{this.state.date.toLocaleTimeString()}</code></p>
        <p>conferences:</p>

        <form name="clanSearch" onSubmit={this.handleSubmit}>
          <input 
            name="clanName"
            value={this.state.clanName} 
            onChange={this.handleChangeClanName}/>
          <button 
            type="submit">
            Search
          </button>
          <h1>{this.state.clanName}</h1>
          {this.state.clanList}
        </form>
      </div>
    );
  }
}


export default App;
