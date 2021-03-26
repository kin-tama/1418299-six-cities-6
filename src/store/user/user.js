import {ActionType} from "../action";

const initialState = {
  authorizationStatus: false,
  authorizedEmail: ``,
};

export const user = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.GET_EMAIL:
      return {
        ...state,
        authorizedEmail: (action.payload)
      };

    case ActionType.CHECK_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: (action.payload ? true : false),
        authorizedEmail: action.payload
      };

    default:
      return state;
  }
};
