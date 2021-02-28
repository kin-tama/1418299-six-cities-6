import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./main/main-page";
import Favorites from "./favorites/favorites";
import Room from "./room/room";
import SignIn from "./sign-in/sign-in";
import NotFound from "./not-found/not-found";

const App = (props) => {
  const {mockOffers, mockComments} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage mockOffers={mockOffers} />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/favorites">
          <Favorites mockOffers={mockOffers} />
        </Route>

        <Route exact path="/offer/:id">
          <Room mockComments={mockComments}/>
        </Route>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>

    </BrowserRouter>
  );

};

App.propTypes = {
  mockOffers: PropTypes.array.isRequired,
  mockComments: PropTypes.array.isRequired
};

export default App;
