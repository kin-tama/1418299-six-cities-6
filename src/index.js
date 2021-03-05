import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";
import Offers from "./mock/offers";
import Comments from "./mock/commentGet";
import Cities from "./mock/city";
import NewComment from "./mock/newComment";

ReactDOM.render(
    <App offers={Offers} comments={Comments} cities={Cities} newComment={NewComment}/>,
    document.querySelector(`#root`)
);
