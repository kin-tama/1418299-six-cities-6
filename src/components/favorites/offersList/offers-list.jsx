import React, {useState} from "react";
import SingleCard from "../../single-card/single-card";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../prop-types/prop-types";


const OffersList = (props) => {
  const {offers, renderType} = props;
  const [pref, setPref] = useState(0);

  const CLASSES = {
    MAIN: `cities__places-list places__list tabs__content`,
    ROOM: `near-places__list places__list`
  };

  return (
    <>
      {renderType === Object.keys(CLASSES)[1] && <h2 className="near-places__title">Other places in the neighbourhood</h2>}
      <div className={CLASSES[renderType]}>
        {offers.map((offer) => <SingleCard offer={offer} key={offer.id} setPref={setPref} pref={pref}
        ></SingleCard>)}
      </div>
    </>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  renderType: PropTypes.string.isRequired
};

export default OffersList;
