export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
  CHANGE_SORT_STATUS: `offers/changeSortStatus`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  CHANGE_ACTIVE_PIN: `offers/changeActivePin`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_SINGLE_OFFER: `data/loadSingleOffer`,
  LOAD_COMMENTS: `data/loadComments`,
  CHECK_AUTHORIZATION: `data/authorize`,
  GET_EMAIL: `data/getEmail`,
  LOAD_NEARBY: `offers/loadNearby`,
  REDIRECT_404: `offers/redirect`
};

export const ActionCreator = {
  redirect404: (status) => ({
    type: ActionType.REDIRECT_404,
    payload: status
  }),

  changeCity: (name) => ({
    type: ActionType.CHANGE_CITY,
    payload: name
  }),

  changeSortStatus: () => ({
    type: ActionType.CHANGE_SORT_STATUS
  }),

  changeSortType: (newSortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: newSortType
  }),

  changeActivePin: (cardId) => ({
    type: ActionType.CHANGE_ACTIVE_PIN,
    payload: cardId
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  loadOffersNearby: (nearby) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearby
  }),

  loadSingleOffer: (offer) => ({
    type: ActionType.LOAD_SINGLE_OFFER,
    payload: offer
  }),

  getComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),

  checkAuthorization: (status) => ({
    type: ActionType.CHECK_AUTHORIZATION,
    payload: status
  }),

  getEmail: (email) => ({
    type: ActionType.GET_EMAIL,
    payload: email
  }),
};
