import {ActionType} from "../action";

const initialState = {
  isNotFound: false
};

export const route = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REDIRECT_404:
      return {
        ...state,
        isNotFound: (action.payload)
      };

    default:
      return state;
  }
};
