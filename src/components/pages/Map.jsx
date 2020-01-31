import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYnJhaW53b3NoZXIiLCJhIjoiY2s2MGU2YzJzMDZreDNmcGtwMTR2OTg1ZyJ9.aCjydgW8L_sIScgEvGeStw';

class Map extends React.Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v8',
        center: [-74.0066, 40.7135], // starting position [lng, lat]
        zoom: 15 // starting zoom
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 80,
      left: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => this.mapContainer = el} />;
  }
}

export default Map;