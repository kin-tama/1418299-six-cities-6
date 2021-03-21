import {ActionCreator} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const fetchNearbyOffers = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)))
);

export const fetchSingleOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadSingleOffer(data)))
    .catch(() => dispatch(ActionCreator.redirect404(true)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.getComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => dispatch(ActionCreator.checkAuthorization(data.email)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
  .then(() => dispatch(ActionCreator.checkAuthorization(true)))
);

export const postComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
  .then(({data}) => dispatch(ActionCreator.getComments(data)))
  .catch(() => {})
);
