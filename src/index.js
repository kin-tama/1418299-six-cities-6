import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

const times = [0, 1, 2, 3, 4];


ReactDOM.render(
    <App cardsNumber = {times}/>,
    document.querySelector(`#root`)
);
