import {ActionType} from "../action";

const initialState = {
  activePin: 0,
};

export const map = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_ACTIVE_PIN:
      return {
        ...state,
        activePin: action.payload
      };

    default:
      return state;
  }
};
