import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app";
import Offers from "./mock/offers";
import Comments from "./mock/commentGet";
import Cities from "./mock/city";
import NewComment from "./mock/newComment";
import {reducer} from "./source/reducer";

const store = createStore(
    reducer,
    composeWithDevTools()
);

ReactDOM.render(

    <Provider store={store}>
      <App offers={Offers} comments={Comments} cities={Cities} newComment={NewComment}/>
    </Provider>,
    document.querySelector(`#root`)
);

