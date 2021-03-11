import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import OffersList from "../favorites/offersList/offers-list";
import {offersPropTypes} from "../prop-types/prop-types";
import Map from "../map/map";
import CitiesList from "../citiesList/citiesList";

const MainPage = (props) => {
  const {offers, cities, activeCity} = props;
  const renderType = `MAIN`;

  const filteredOffers = offers.filter((offer) => {
    return (
      offer.city.name === activeCity
    );
  });

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                {/* <ul className="places__options places__options--custom places__options--opened"> */}
                <ul className="places__options places__options--custom">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList offers={filteredOffers} renderType={renderType}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map cities={cities} offers={filteredOffers} renderType={renderType}></Map>
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
  activeCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

export default connect(mapStateToProps, null)(MainPage);
