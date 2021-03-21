import React from "react";
import PropTypes from "prop-types";

const PropertyInside = ({good}) => {
  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
};

PropertyInside.propTypes = {
  good: PropTypes.string.isRequired
};

export default PropertyInside;
