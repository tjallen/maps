import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from './keys';

export class MapContainer extends Component {
  handleMapClick(mapProps, map, evt) {
    console.log(`map clicked at ${evt.latLng.lat()}, ${evt.latLng.lng()}`);
  }
  render() {
    const { stations } = this.props;
    const style = {
      height: '720px',
    };
    return (
      <Map
        style={style}
        google={this.props.google}
        zoom={12}
        initialCenter={{
          lat: 51.507778,
          lng: -0.127933,
        }}
        onClick={this.handleMapClick}
      >
      {stations.map((station, index) =>
        <Marker
          key={index}
          title={station.commonName}
          name={station.commonName}
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