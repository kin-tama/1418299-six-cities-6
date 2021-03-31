import React from "react";
import PropTypes from "prop-types";
import SingleCity from "../cities-list/single-city";

const MainEmpty = (props) => {

  const {
    cities,
  } = props;

  return (
    <main className="page__main page__main--index page__main--index-empty">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.keys(cities).map((city) => <SingleCity city={city} key={city}></SingleCity>)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
};

MainEmpty.propTypes = {
  cities: PropTypes.objectOf(PropTypes.array).isRequired
};

export default MainEmpty;
