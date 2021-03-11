// const CHANGE_CITY = `CHANGE_CITY`;

// export const changeCity = (apartments) => ({
//   type: CHANGE_CITY,
//   payload: apartments
// })

// в eventListener не указывай объект, а вызывай функцию

export const ActionType = {
  CHANGE_CITY: `offers/changeCity`,
};

export const ActionCreator = {
  changeCity: (name) => ({
    type: ActionType.CHANGE_CITY,
    payload: name
  })
};
