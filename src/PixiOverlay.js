import React, { Component } from 'react';
import * as PIXI from 'pixi.js';

export default class PixiOverlay extends Component {
  componentDidMount() {
    this.renderer = PIXI.autoDetectRenderer(
      16, 16,
      {
        resolution: 1,
        antialias: false,
        transparent: false,
      }
    );
    this.PIXIwrapper.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    this.renderer.render(this.stage);
  }
  render() {
    return (
      <div ref={(el) => {this.PIXIwrapper = el}} />
    )
  }
}