import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import Offers from "./mock/offers";
import Comments from "./mock/commentGet";

ReactDOM.render(
    <App mockOffers={Offers} mockComments={Comments}/>,
    document.querySelector(`#root`)
);
