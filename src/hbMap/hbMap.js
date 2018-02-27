import React, { Component } from 'react';
import "./hbMap.css"
const google = window.google;

class HbMap extends Component {
    componentDidMount(){
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map})
    }
      render() {
          return(
            <div>
                <div id="map">
                </div>
            </div>
          )
      }
    }
    export default HbMap;