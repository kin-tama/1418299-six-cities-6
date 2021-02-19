import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./main/main-page";
import Favorites from "./favorites/favorites";
import Room from "./room/room";
import SignIn from "./sign-in/sign-in";
import NotFound from "./not-found/not-found";

const App = (props) => {
  const {cardsNumber} = props;
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cardsNumber={cardsNumber} />);
        </Route>

        <Route exact path="/login">
          <SignIn />);
        </Route>

        <Route exact path="/favorites">
          <Favorites />);
        </Route>

        <Route exact path="/offer/:id">
          <Room />);
        </Route>

        <Route path="">
          <NotFound />);
        </Route>

      </Switch>

    </BrowserRouter>
  );

};

App.propTypes = {
  cardsNumber: PropTypes.array.isRequired
};

export default App;
