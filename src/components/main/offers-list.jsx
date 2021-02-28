import React, {useState} from "react";
import SingleCard from "./single-card";
import PropTypes from "prop-types";

const OffersList = (props) => {
  const {mockOffers} = props;
  const [pref, setPref] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {mockOffers.map((mockOffer) => <SingleCard mockOffer={mockOffer} key={mockOffer.id} setPref={setPref} pref={pref}
      ></SingleCard>)}
    </div>
  );
};

OffersList.propTypes = {
  mockOffers: PropTypes.arrayOf(PropTypes.shape({
    "bedrooms": PropTypes.number,
    "city": PropTypes.shape({
      "location": PropTypes.shape({
        "latitude": PropTypes.number.isRequired,
        "longitude": PropTypes.number.isRequired,
        "zoom": PropTypes.number.isRequired
      }),
      "name": PropTypes.string.isRequired
    }),
    "description": PropTypes.string.isRequired,
    "goods": PropTypes.array.isRequired,
    "host": PropTypes.shape({
      "avatarUrl": PropTypes.string.isRequired,
      "id": PropTypes.number.isRequired,
      "isPro": PropTypes.bool.isRequired,
      "name": PropTypes.string.isRequired
    }),
    "id": PropTypes.number.isRequired,
    "images": PropTypes.array.isRequired,
    "isFavorite": PropTypes.bool.isRequired,
    "isPremium": PropTypes.bool.isRequired,
    "location": PropTypes.shape({
      "latitude": PropTypes.number.isRequired,
      "longitude": PropTypes.number.isRequired,
      "zoom": PropTypes.number.isRequired
    }),
    "maxAdults": PropTypes.number.isRequired,
    "previewImage": PropTypes.string.isRequired,
    "price": PropTypes.number.isRequired,
    "rating": PropTypes.number.isRequired,
    "title": PropTypes.string.isRequired,
    "type": PropTypes.string.isRequired
  })).isRequired
};

export default OffersList;
