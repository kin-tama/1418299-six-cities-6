import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./main/main-page";
import Favorites from "./favorites/favorites";
import Room from "./room/room";
import SignIn from "./sign-in/sign-in";
import NotFound from "./not-found/not-found";
import {offersPropTypes, commentsPropTypes} from "./prop-types/prop-types";

const App = (props) => {
  const {offers, comments, cities, newComment} = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage offers={offers} cities={cities}/>
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>

        <Route exact path="/offer/:id">
          <Room comments={comments} newComment={newComment} cities={cities} offers={offers}/>
        </Route>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>

    </BrowserRouter>
  );

};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offersPropTypes)).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentsPropTypes)).isRequired,
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  newComment: PropTypes.shape(commentsPropTypes)
};

export default App;
