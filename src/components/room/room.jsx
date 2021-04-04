import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import Review from "./review";
import ReviewForm from "./reviews-form";
import Map from "../map/map";
import LoadingScreen from "../loading/loading";
import OffersList from "../offers-list/offers-list";
import PropertyInside from "./property-inside";
import PropertyPics from "./property-pics";
import Header from "../header/header";
import {offersPropTypes} from "../prop-types/prop-types";
import {fetchComments, fetchSingleOffer, fetchNearbyOffers, changeStatus} from "../../store/api-action";
import {rating, adaptComment} from "../utils/util";
import {redirect404} from "../../store/action";

import {
  getOffers,
  getIsSingleOfferLoaded,
  getSingleOffer,
  getComments,
  getOffersNearby
} from "../../store/data/selectors";

import {getActivePin} from "../../store/map/selectors";
import {getAuthorizationStatus, getAuthorizedEmail} from "../../store/user/selectors";
import {getIsNotFound} from "../../store/route/selectors";

const Room = (props) => {
  const {
    comments,
    cities,
    authorizedEmail,
    activePin,
    authorizationStatus,
    onLoadOffer,
    isSingleOfferLoaded,
    singleOffer,
    offersNearby,
    isNotFound,
    onFail,
    onChangeStatus
  } = props;


  const history = useHistory();
  const renderType = `ROOM`;
  const roomId = useParams().id;

  const [isFavorite, changeFavorite] = useState();

  const changeStatusHandle = () => {
    if (!authorizationStatus) {
      history.push(`/login`);
    } else if (authorizationStatus) {
      onChangeStatus(singleOffer.id, singleOffer.isFavorite ? 0 : 1);
      changeFavorite(!isFavorite);
    }
  };

  useEffect(() => {
    onLoadOffer(roomId);
    window.scrollTo(0, 0);
    if (isNotFound) {
      history.push(`/404`);
      onFail();
    }

  }, [roomId, isNotFound]);

  useEffect(() => {

    changeFavorite(singleOffer.isFavorite);

  }, [singleOffer.isFavorite]);

  if (!isSingleOfferLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const getActivePinData = (pin) => {
    if (pin > 0) {
      return offersNearby.find((offer) => offer.id === pin).location;
    }
    return {};
  };

  return (
    <div className="page">
      <Header authorizationStatus={authorizationStatus} authorizedEmail={authorizedEmail}/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {singleOffer.images.map((image, index)=> index < 6 ? (<PropertyPics image={image} key={image}></PropertyPics>) : ``)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {singleOffer.isPremium && <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {singleOffer.title}
                </h1>
                <button onClick={changeStatusHandle} className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rating(singleOffer)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{singleOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {singleOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {singleOffer.bedrooms} {singleOffer.bedrooms === 1 ? `Bedroom` : `Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {singleOffer.maxAdults} {singleOffer.maxAdults === 1 ? `adult` : `adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{singleOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {singleOffer.goods.map((good)=><PropertyInside good={good} key={good}></PropertyInside>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={singleOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {singleOffer.host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {singleOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ul className="reviews__list">
                  {comments.map((comment) => <Review comment={adaptComment(comment)} key={comment.id}></Review>)}
                </ul>

                {authorizationStatus && <ReviewForm offerId={singleOffer.id}> </ReviewForm>}

              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map cities={cities} activePinData={getActivePinData(activePin)} offers={offersNearby} renderType={renderType}></Map>
          </section>
        </section>
        <div className="container">

          <OffersList offers={offersNearby} renderType={renderType}/>

        </div>
      </main>
    </div>
  );
};

Room.propTypes = {
  comments: PropTypes.array.isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  authorizedEmail: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  activePin: PropTypes.number.isRequired,
  isSingleOfferLoaded: PropTypes.bool.isRequired,
  onLoadOffer: PropTypes.func.isRequired,
  isNotFound: PropTypes.bool.isRequired,
  onFail: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  singleOffer: PropTypes.shape(offersPropTypes).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizedEmail: getAuthorizedEmail(state),
  offers: getOffers(state),
  isSingleOfferLoaded: getIsSingleOfferLoaded(state),
  singleOffer: getSingleOffer(state),
  comments: getComments(state),
  offersNearby: getOffersNearby(state),
  activePin: getActivePin(state),
  isNotFound: getIsNotFound(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    dispatch(fetchSingleOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearbyOffers(id));
  },

  onFail() {
    dispatch(redirect404(false));
  },

  onChangeStatus(id, status) {
    dispatch(changeStatus(id, status));
    dispatch(fetchSingleOffer(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
