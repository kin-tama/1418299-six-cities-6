import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {sortAllOffers} from "../utils/util";
import OffersList from "../offers-list/offers-list";
import Map from "../map/map";
import SingleCity from "../cities-list/single-city";
import SortOptions from "../sort/sort-options";
import LoadingScreen from "../loading/loading";
import Header from "../header/header";
import MainEmpty from "./main-empty";

import {offersPropTypes} from "../prop-types/prop-types";
import {fetchOffersList} from "../../store/api-action";

import {
  getOffers,
  getActiveSortType,
  getActiveCity,
  getIsDataLoaded
} from "../../store/data/selectors";

import {getAuthorizedEmail, getAuthorizationStatus} from "../../store/user/selectors";
import {getActivePin} from "../../store/map/selectors";


const MainPage = (props) => {
  const {
    offers,
    cities,
    activeCity,
    sortTypes,
    sortedOffers,
    activePin,
    isDataLoaded,
    onLoadOffers,
    authorizationStatus,
    authorizedEmail
  } = props;
  const renderType = `MAIN`;

  useEffect(() => {
    onLoadOffers();
  }, [isDataLoaded, authorizedEmail]);

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

      <Header authorizationStatus={authorizationStatus} authorizedEmail={authorizedEmail}/>

      {filteredOffers.length < 1 ? <MainEmpty cities={cities}/> : <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.keys(cities).map((city) => <SingleCity city={city} key={city}></SingleCity>)}
            </ul>
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
      </main>}
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
  authorizationStatus: PropTypes.bool.isRequired,
  authorizedEmail: PropTypes.string.isRequired,
  sortedOffers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired
};

const mapStateToProps = (state) => ({
  sortedOffers: sortAllOffers(getOffers(state).slice(), getOffers(state), getActiveSortType(state)),
  activeCity: getActiveCity(state),
  activeSortType: getActiveSortType(state),
  isDataLoaded: getIsDataLoaded(state),
  offers: getOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  authorizedEmail: getAuthorizedEmail(state),
  activePin: getActivePin(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffers() {
    dispatch(fetchOffersList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
