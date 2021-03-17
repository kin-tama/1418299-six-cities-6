export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
  CHANGE_SORT_STATUS: `offers/changeSortStatus`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  CHANGE_ACTIVE_PIN: `offers/changeActivePin`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_COMMENTS: `data/loadComments`,
};

export const ActionCreator = {
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

  getComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  })
};
