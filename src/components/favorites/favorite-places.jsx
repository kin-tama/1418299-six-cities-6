import React from "react";
import Favorite from "./favorite";

import PropTypes from "prop-types";

const FavoritePlaces = ({offers, city, onChangeStatus}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <Favorite onChangeStatus={onChangeStatus} offer={offer} key={offer.id}></Favorite>)}
      </div>
    </li>
  );
};

FavoritePlaces.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  onChangeStatus: PropTypes.func.isRequired
};

export default (FavoritePlaces);
