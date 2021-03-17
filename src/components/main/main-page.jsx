import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import {sortAllOffers} from "../utils/util";
import OffersList from "../favorites/offersList/offers-list";
import {offersPropTypes} from "../prop-types/prop-types";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import SortOptions from "../sort/sort-options";
import LoadingScreen from "../loading/loading";
import {fetchOffersList} from "../../store/api-action";

const MainPage = (props) => {
  const {offers, cities, activeCity, sortTypes, activeSortType, activePin, isDataLoaded, onLoadOffers} = props;
  const renderType = `MAIN`;
  const unsortedOffers = offers.slice();
  const sortedOffers = sortAllOffers(unsortedOffers, offers, activeSortType);

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadOffers();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const filteredOffers = sortedOffers.filter((offer) => {
    return (
      offer.city.name === activeCity
    );
  });

  const getActivePinData = (pin) => {
    if (pin > 0) {
      return offers.find((offer) => offer.id === pin).location;
    }

    return {};
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={Object.keys(cities)}> </CitiesList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} {filteredOffers.length === 1 ? `place` : `places`} to stay in {activeCity}</b>

              <SortOptions sortTypes={sortTypes}></SortOptions>

              <OffersList offers={filteredOffers} renderType={renderType}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cities={cities} offers={filteredOffers} renderType={renderType} activePinData={getActivePinData(activePin)}></Map>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  activeCity: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  sortTypes: PropTypes.object.isRequired,
  activePin: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  activeSortType: state.activeSortType,
  activePin: state.activePin,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
