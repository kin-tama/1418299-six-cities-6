import React, {useState} from "react";
import SingleCard from "./single-card";
import PropTypes from "prop-types";
import {offersPropTypes} from "../prop-types/prop-types";


const OffersList = (props) => {
  const {offers} = props;
  const [pref, setPref] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((mockOffer) => <SingleCard mockOffer={mockOffer} key={mockOffer.id} setPref={setPref} pref={pref}
      ></SingleCard>)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired
};

export default OffersList;
