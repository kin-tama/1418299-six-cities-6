import React from "react";
import PropTypes from "prop-types";
import {changeCity} from "../../store/action";
import {fetchOffersList} from "../../store/api-action";
import {connect} from "react-redux";
import {getActiveCity} from "../../store/data/selectors";


const SingleCity = (props) => {
  const {city, activeCity, onClickchangeCity} = props;

  return (
    <li className="locations__item">
      {city === activeCity && <a onClick={(evt)=>onClickchangeCity(evt.target.textContent)} className="locations__item-link tabs__item tabs__item--active" href="#">
        <span>{city}</span>
      </a>}

      {city !== activeCity && <a onClick={(evt)=>onClickchangeCity(evt.target.textContent)} className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>}
    </li>
  );
};

SingleCity.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  onClickchangeCity: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  activeCity: getActiveCity(store)
});

const mapDispatchToProps = (dispatch) => ({
  onClickchangeCity(city) {
    dispatch(changeCity(city));
    dispatch(fetchOffersList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCity);
