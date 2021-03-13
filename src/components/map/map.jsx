import React, {useEffect, useRef} from "react";
import {connect} from 'react-redux';

import PropTypes from "prop-types";
import leaflet from "leaflet";
import {offersPropTypes} from "../prop-types/prop-types";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {cities, offers, renderType, activeCity, activePinData} = props;
  const city = cities[activeCity];
  const refMap = useRef();
  const customZoom = 11;

  const SIZES = {
    ROOM: {
      height: `579px`,
      width: `1144px`,
      marginLeft: `auto`,
      marginRight: `auto`
    },

    MAIN: {
      height: `700px`,
      width: `512px`
    }
  };


  useEffect(() => {

    if (!refMap.current.id) {
      refMap.current.remove();
    }

    refMap.current = leaflet.map(`map`, {
      center: city,
      zoom: customZoom,
      zoomControl: false,
      marker: true
    });

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(refMap.current);

    offers.forEach((offer) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon: customIcon
      }).addTo(refMap.current).bindPopup(offer.title);

      return ()=>{
        refMap.current.remove();
      };
    }, []);

    refMap.current.setView(city, customZoom);


    if (activePinData.latitude) {
      leaflet.marker({
        lat: activePinData.latitude,
        lng: activePinData.longitude
      },
      {
        icon: leaflet.icon({
          iconUrl: `img/pin-active.svg`,
          iconSize: [30, 30]
        })
      }).addTo(refMap.current).bindPopup(offers[0].title);
    }
  });

  return (
    <div id="map" style={SIZES[renderType]} ref={refMap}></div>
  );

};

Map.propTypes = {
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  renderType: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  activePinData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

export default connect(mapStateToProps, null)(Map);

