import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import Header from "../header/header";
import FavoritePlaces from "./favorite-places";

import {offersPropTypes} from "../prop-types/prop-types";
import {fetchFavoritesList, changeStatus} from "../../store/api-action";
import {reloadFavs} from "../../store/action";


import {getAuthorizedEmail, getAuthorizationStatus} from "../../store/user/selectors";
import {getArePrefsLoaded, getFavs} from "../../store/data/selectors";

const Favorites = (props) => {
  const {
    authorizedEmail,
    authorizationStatus,
    arePrefsLoaded,
    onLoadFavs,
    favs,
    onChangeStatus,
    cities,
  } = props;

  const citiesList = Object.keys(cities);

  useEffect(() => {
    onLoadFavs();
  }, [arePrefsLoaded]);

  const filterOffers = (offersArray, cityToFilter) => {
    return offersArray.slice().filter((offer) => offer.city.name === cityToFilter);
  };

  return (
    <div className="page">

      <Header authorizationStatus={authorizationStatus} authorizedEmail={authorizedEmail}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesList.map((city) => <FavoritePlaces onChangeStatus={onChangeStatus} offers={filterOffers(favs, city)} key={city} city={city}/>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)),
  authorizedEmail: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.bool.isRequired,
  arePrefsLoaded: PropTypes.bool.isRequired,
  onLoadFavs: PropTypes.func.isRequired,
  offersCities: PropTypes.object,
  onChangeStatus: PropTypes.func.isRequired,
  cities: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLoadFavs() {
    dispatch(fetchFavoritesList());
  },

  onChangeStatus(id, status) {
    dispatch(changeStatus(id, status));
    dispatch(reloadFavs());
    dispatch(fetchFavoritesList());
  },
});

const mapStateToProps = (state) => ({
  authorizedEmail: getAuthorizedEmail(state),
  authorizationStatus: getAuthorizationStatus(state),
  arePrefsLoaded: getArePrefsLoaded(state),
  favs: getFavs(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
