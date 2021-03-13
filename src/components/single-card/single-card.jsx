import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {rating} from "../utils/util";
import {offersPropTypes} from "../prop-types/prop-types";
import {ActionCreator} from "../../source/action";


const SingleCard = (props) => {
  const {mockOffer, changeActivePin} = props;
  const premium = mockOffer.isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ``;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={()=>{
        changeActivePin(mockOffer.id);
      }}
      onMouseLeave={()=>{
        changeActivePin(0);
      }}>
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="/offer/:id">
          <img className="place-card__image" src={mockOffer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{mockOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating(mockOffer)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to="/offer/:id">{mockOffer.title}</Link>
        </h2>
        <p className="place-card__type">{mockOffer.type}</p>
      </div>
    </article>
  );
};

SingleCard.propTypes = {
  mockOffer: PropTypes.shape(offersPropTypes).isRequired,
  setPref: PropTypes.func.isRequired,
  changeActivePin: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  changeActivePin(id) {
    dispatch(ActionCreator.changeActivePin(id));
  },
});

export default connect(null, mapDispatchToProps)(SingleCard);
