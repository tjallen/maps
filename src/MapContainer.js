import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import keys from './keys';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
    }
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }
  handleMarkerClick(props, marker, e) {
    this.setState({
      activeStation: props.title,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }
  handleMapClick(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }
  render() {
    const { stations } = this.props;
    const {
      activeMarker,
      activeStation,
      showingInfoWindow
    } = this.state;
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
          position={{
            lat: station.lat,
            lng: station.lon
          }}
          onClick={this.handleMarkerClick}
        />
      )}
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <p>{activeStation}</p>
      </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (keys.API_KEY_GMAPS)
})(MapContainer)