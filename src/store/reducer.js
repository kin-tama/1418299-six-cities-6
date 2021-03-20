import {ActionType} from "./action";
import {adaptOffers, adaptOffer} from "../components/utils/util";

const initialState = {
  activeCity: `Paris`,
  activeSortType: `popular`,
  activeSortChoose: false,
  activePin: 0,
  offers: [],
  isDataLoaded: false,
  isSingleOfferLoaded: false,
  authorizationStatus: false,
  authorizedEmail: ``,
  singleOffer: {},
  comments: [],
  offersNearby: []
};

export const reducer = (state = initialState, action) => {
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

    case ActionType.LOAD_SINGLE_OFFER:
      return {
        ...state,
        singleOffer: adaptOffer(action.payload),
        isSingleOfferLoaded: true
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };

    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        offersNearby: adaptOffers(action.payload)
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffers(action.payload),
        isDataLoaded: true
      };

    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    case ActionType.CHANGE_SORT_TYPE:
      return {
        ...state,
        activeSortType: action.payload
      };

    case ActionType.CHANGE_SORT_STATUS:
      const newStatus = !state.activeSortChoose;
      return {
        ...state,
        activeSortChoose: newStatus
      };

    case ActionType.CHANGE_ACTIVE_PIN:
      return {
        ...state,
        activePin: action.payload
      };


    default:
      return state;
  }
};
