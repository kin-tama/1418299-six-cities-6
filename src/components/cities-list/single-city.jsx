import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const SingleCity = (props) => {
  const {city, activeCity, changeCity} = props;
  return (
    <li className="locations__item">
      {city === activeCity && <a onClick={(evt)=>changeCity(evt.target.textContent)} className="locations__item-link tabs__item tabs__item--active" href="#">
        <span>{city}</span>
      </a>}

      {city !== activeCity && <a onClick={(evt)=>changeCity(evt.target.textContent)} className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>}
    </li>
  );
};

SingleCity.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCity);
