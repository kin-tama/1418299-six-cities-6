import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";

import MainPage from "./main/main-page";
import Favorites from "./favorites/favorites";
import Room from "./room/room";
import SignIn from "./sign-in/sign-in";
import NotFound from "./not-found/not-found";
import PrivateRoute from "./private-route/private-route";
import browserHistory from "../browser-history";

const App = (props) => {
  const {
    cities,
    sortTypes
  } = props;

  return (

    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainPage cities={cities} sortTypes={sortTypes}/>
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <PrivateRoute
          exact path="/favorites"
          render ={()=><Favorites cities={cities}/>}
        >
        </PrivateRoute>

        <Route exact path="/offer/:id">
          <Room cities={cities}/>
        </Route>

        <Route exact path="404">
          <NotFound />
        </Route>

        <Route path="">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );

};

App.propTypes = {
  cities: PropTypes.objectOf(PropTypes.array).isRequired,
  sortTypes: PropTypes.object.isRequired
};

export default App;
