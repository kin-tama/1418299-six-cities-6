import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import Review from "./review";
import ReviewForm from "./reviews-form";
import Map from "../map/map";
import LoadingScreen from "../loading/loading";
import OffersList from "../offers-list/offers-list";
import PropertyInside from "./property-inside";
import PropertyPics from "./property-pics";
import {commentsPropTypes} from "../prop-types/prop-types";
import {offersPropTypes} from "../prop-types/prop-types";
import {fetchComments, fetchSingleOffer, fetchNearbyOffers} from "../../store/api-action";
import {rating, adaptComment} from "../utils/util";

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
    offersNearby
  } = props;

  const renderType = `ROOM`;

  const roomId = useParams().id;

  useEffect(() => {
    onLoadOffer(roomId);
  }, [roomId]);

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
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {!authorizationStatus && <Link className="header__nav-link header__nav-link--profile" to="/login">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Sign in</span>
                  </Link>}

                  {authorizationStatus && <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{authorizedEmail}</span>
                  </Link>}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {singleOffer.images.map((image, index)=> index < 6 ? (<PropertyPics image={image}></PropertyPics>) : ``)}
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
                <button className="property__bookmark-button button" type="button">
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
  singleOffer: PropTypes.shape(offersPropTypes).isRequired,
  comments: PropTypes.array.isRequired,
  newComment: PropTypes.shape(commentsPropTypes).isRequired,
  offersNearby: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  authorizedEmail: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  activePin: PropTypes.number.isRequired,
  isSingleOfferLoaded: PropTypes.bool.isRequired,
  onLoadOffer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activePin: state.activePin,
  authorizationStatus: state.authorizationStatus,
  authorizedEmail: state.authorizedEmail,
  isSingleOfferLoaded: state.isSingleOfferLoaded,
  singleOffer: state.singleOffer,
  comments: state.comments,
  offersNearby: state.offersNearby
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    dispatch(fetchSingleOffer(id));
    dispatch(fetchComments(id));
    dispatch(fetchNearbyOffers(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
