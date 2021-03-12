import React from "react";
import SingleCity from "./singleCity";
import PropTypes from "prop-types";

const CitiesList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <SingleCity city={city} key={city}></SingleCity>)}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
};


export default CitiesList;

