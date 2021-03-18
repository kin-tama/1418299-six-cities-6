import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "./main/main-page";
import Favorites from "./favorites/favorites";
import Room from "./room/room";
import SignIn from "./sign-in/sign-in";
import NotFound from "./not-found/not-found";
import {commentsPropTypes} from "./prop-types/prop-types";
import PrivateRoute from "./private-route/private-route";

const App = (props) => {
  const {
    comments,
    cities,
    newComment,
    sortTypes
  } = props;

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage cities={cities} sortTypes={sortTypes}/>
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <PrivateRoute
          exact path="/favorites"
          render ={()=><Favorites/>}
        >
        </PrivateRoute>

        <PrivateRoute
          exact path="/offer/:id"
          render ={()=><Room comments={comments} newComment={newComment} cities={cities}/>}
        >
        </PrivateRoute>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentsPropTypes)).isRequired,
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  newComment: PropTypes.shape(commentsPropTypes),
  sortTypes: PropTypes.object.isRequired
};

export default App;
