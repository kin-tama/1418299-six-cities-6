import React, {memo} from "react";
import PropTypes from "prop-types";

const PropertyPics = ({image}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  );
};

PropertyPics.propTypes = {
  image: PropTypes.string.isRequired
};

export default memo(PropertyPics);
