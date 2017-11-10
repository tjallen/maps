import React, { Component } from 'react';
import * as PIXI from 'pixi.js';

export default class PixiOverlay extends Component {
  componentDidMount() {
    this.renderer = PIXI.autoDetectRenderer(
      window.innerWidth, window.innerHeight,
      {
        resolution: 1,
        antialias: false,
        transparent: true,
      }
    );
    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.display = "block";
    this.renderer.view.style.zIndex = 99;
    this.renderer.autoResize = true;
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