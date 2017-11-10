import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from './keys';

export class MapContainer extends Component {
  render() {
    const { stations } = this.props;
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 51.507778,
          lng: -0.127933,
        }}
      >
      {stations.map((station, index) =>
        <Marker
          key={index}
          title={station.commonName}
          position={{ lat: station.lat, lng: station.lon }}
        />
      )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (keys.API_KEY_GMAPS)
})(MapContainer)