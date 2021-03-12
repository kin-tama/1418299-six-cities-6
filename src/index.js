import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app";
import Offers from "./mock/offers";
import Comments from "./mock/commentGet";
import {CITIES} from "./mock/const";
import {SORT_TYPES} from "./mock/const";
import NewComment from "./mock/newComment";
import {reducer} from "./source/reducer";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(

    <Provider store={store}>
      <App offers={Offers} comments={Comments} cities={CITIES} newComment={NewComment} sortTypes={SORT_TYPES}/>
    </Provider>,
    document.querySelector(`#root`)
);

