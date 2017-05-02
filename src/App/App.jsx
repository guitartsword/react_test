import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import iise from './Services/App.js'
const iiseService = new iise();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    iiseService.getConferences().then((response) => {
       this.conferenceList = response.map((conference) => 
        <li> {JSON.stringify(conference.name)} </li>
      );
    });

  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
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
        {this.conferenceList}
      </div>
    );
  }
}


export default App;
