import React from 'react';
import PropTypes from 'prop-types';
import MainPage from "./main-page";

const App = (props) => {
  const {cardsNumber} = props;
  return <MainPage cardsNumber={cardsNumber} />;
};

App.propTypes = {
  cardsNumber: PropTypes.array.isRequired
};

export default App;
