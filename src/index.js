import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app";
import Comments from "./const/commentGet";
import {CITIES} from "./const/const";
import {SORT_TYPES} from "./const/const";
import NewComment from "./const/newComment";
import {reducer} from "./store/reducer";
import {createApi} from "./api";
// import {ActionCreator} from "./store/action"

const api = createApi();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(

    <Provider store={store}>
      <App comments={Comments} cities={CITIES} newComment={NewComment} sortTypes={SORT_TYPES}/>
    </Provider>,
    document.querySelector(`#root`)
);
