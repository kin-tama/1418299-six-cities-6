import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link, useHistory} from "react-router-dom";
import {rating} from "../utils/util";
import {offersPropTypes} from "../prop-types/prop-types";
import {changeActivePin} from "../../store/action";
import {changeStatus} from "../../store/api-action";
import {getAuthorizationStatus} from "../../store/user/selectors";

const SingleCard = (props) => {

  const {
    offer,
    onChangeActivePin,
    onChangeStatus,
    authorizationStatus
  } = props;

  const premium = offer.isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ``;

  const route = `/offer/${offer.id}`;
  const history = useHistory();
  const [isFavorite, changeFavorite] = useState(offer.isFavorite);

  const changeStatusHandle = () => {
    if (!authorizationStatus) {
      history.push(`/login`);
    } else if (authorizationStatus) {
      onChangeStatus(offer.id, offer.isFavorite ? 0 : 1);
      changeFavorite(!isFavorite);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={()=>{
        onChangeActivePin(offer.id);
      }}
      onMouseLeave={()=>{
        onChangeActivePin(0);
      }}
      onClick={()=>{
        onChangeActivePin(0);
      }}>
      {premium}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={route}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={changeStatusHandle}
            className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating(offer)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={route}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

SingleCard.propTypes = {
  offer: PropTypes.shape(offersPropTypes).isRequired,
  setPref: PropTypes.func.isRequired,
  onChangeActivePin: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeActivePin(id) {
    dispatch(changeActivePin(id));
  },

  onChangeStatus(id, status) {
    dispatch(changeStatus(id, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
