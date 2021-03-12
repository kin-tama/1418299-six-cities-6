// const CHANGE_CITY = `CHANGE_CITY`;

// export const changeCity = (apartments) => ({
//   type: CHANGE_CITY,
//   payload: apartments
// })

// в eventListener не указывай объект, а вызывай функцию

export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
  CHANGE_SORT_STATUS: `offers/changeSortStatus`,
  CHANGE_SORT_TYPE: `offers/changeSortType`,
  CHANGE_ACTIVE_PIN: `offers/changeActivePin`
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
};
