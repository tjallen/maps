import React, { Component } from 'react';
import './App.css';
import keys from './keys';

class App extends Component {
  constructor() {
    super();
    this.state = {
      victoriaLineStations: [],
    }
  }
  componentDidMount() {
    const { APP_ID: id, API_KEY: key } = keys;
    const request = `https://api.tfl.gov.uk/line/victoria/stoppoints?app_id=${id}&app_key=${key}`;
    fetch(request)
      .then(res => res.json())
      .then(victoriaLineStations => this.setState({
        victoriaLineStations,
      }))
  }
  render() {
    const { victoriaLineStations } = this.state;
    return (
      <div>
        <p>Victoria line stations</p>
        {victoriaLineStations.map((station, index) =>
          <li key={index}>{station.commonName}</li>
        )}
      </div>
    );
  }
}

export default App;
