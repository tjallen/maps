import React, { Component } from 'react';
import './App.css';
import keys from './keys';
import MapContainer from './MapContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      victoriaLineStations: [],
    }
  }
  componentDidMount() {
    const { APP_ID_TFL: idTfl, API_KEY_TFL: keyTfl } = keys;
    const request = `https://api.tfl.gov.uk/line/victoria/stoppoints?app_id=${idTfl}&app_key=${keyTfl}`;
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
        <MapContainer />
      </div>
    );
  }
}

export default App;
