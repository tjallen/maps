import React, { Component } from 'react';
import './App.css';
import keys from './keys';

class App extends Component {
  render() {
    const keyInfo = `fake keys: ${keys.API_KEY}, ${keys.APP_ID}`;
    return (
      <div>
        <p>hello world</p>
        <p>{keyInfo}</p>
      </div>
    );
  }
}

export default App;
