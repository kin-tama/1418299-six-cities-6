import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {offersPropTypes} from "../prop-types/prop-types";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {cities, offers} = props;
  const city = cities.Amsterdam;
  const refMap = useRef();
  const customZoom = 11;

  useEffect(() => {
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
  });

  return (
    <div id="map" style={{height: `700px`}} ref={refMap}></div>
  );

};

Map.propTypes = {
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired
};

export default Map;
