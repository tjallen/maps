import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import keys from './keys';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 51.507778,
          lng: -0.127933,
        }}
      >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (keys.API_KEY_GMAPS)
})(MapContainer)