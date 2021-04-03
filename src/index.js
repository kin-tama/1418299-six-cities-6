import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app";
import {CITIES} from "./const/const";
import {SORT_TYPES} from "./const/const";
import rootReducer from "./store/root-reducer";
import {createApi} from "./api";
import {checkAuthorization} from "./store/action";
import {checkAuth} from "./store/api-action";

const api = createApi(
    () => store.dispatch(checkAuthorization(false))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());
ReactDOM.render(

    <Provider store={store}>
      <App cities={CITIES} sortTypes={SORT_TYPES}/>
    </Provider>,
    document.querySelector(`#root`)
);
