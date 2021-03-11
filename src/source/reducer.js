import {ActionType} from "./action";

const initialState = {
  activeCity: `Paris`,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    default:
      return state;
  }
};
