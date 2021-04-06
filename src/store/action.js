export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
  CHANGE_SORT_STATUS: `offers/changeSortStatus`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  CHANGE_ACTIVE_PIN: `offers/changeActivePin`,
  LOAD_OFFERS: `data/loadOffers`,
  RELOAD_OFFERS: `data/reloadOffers`,
  LOAD_FAVS: `data/loadFavs`,
  RELOAD_FAVS: `data/reloadFavs`,
  LOAD_SINGLE_OFFER: `data/loadSingleOffer`,
  LOAD_COMMENTS: `data/loadComments`,
  CHECK_AUTHORIZATION: `data/authorize`,
  GET_EMAIL: `data/getEmail`,
  LOAD_NEARBY: `offers/loadNearby`,
  REDIRECT_404: `offers/redirect`,
};

export const redirect404 = (status) => ({
  type: ActionType.REDIRECT_404,
  payload: status
});

export const changeCity = (name) => ({
  type: ActionType.CHANGE_CITY,
  payload: name
});

export const changeSortStatus = () => ({
  type: ActionType.CHANGE_SORT_STATUS
});

export const changeSortType = (newSortType) => ({
  type: ActionType.CHANGE_SORT_TYPE,
  payload: newSortType
});

export const changeActivePin = (cardId) => ({
  type: ActionType.CHANGE_ACTIVE_PIN,
  payload: cardId
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const reloadOffers = () => ({
  type: ActionType.RELOAD_OFFERS
});

export const loadFavs = (favs) => ({
  type: ActionType.LOAD_FAVS,
  payload: favs
});

export const reloadFavs = () => ({
  type: ActionType.RELOAD_FAVS
});

export const loadOffersNearby = (nearby) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearby
});

export const loadSingleOffer = (offer) => ({
  type: ActionType.LOAD_SINGLE_OFFER,
  payload: offer
});

export const getComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments
});

export const checkAuthorization = (status) => ({
  type: ActionType.CHECK_AUTHORIZATION,
  payload: status
});

export const getEmail = (email) => ({
  type: ActionType.GET_EMAIL,
  payload: email
});
