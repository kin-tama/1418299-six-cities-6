import {ActionType} from "../action";
import {adaptOffers, adaptOffer, sortCommentsByDate} from "../../components/utils/util";

const initialState = {
  activeCity: `Paris`,
  activeSortType: `POPULAR`,
  activeSortChoose: false,
  offers: [],
  favs: [],
  isDataLoaded: false,
  arePrefsLoaded: false,
  isSingleOfferLoaded: false,
  singleOffer: {},
  comments: [],
  offersNearby: [],
};

export const data = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.LOAD_SINGLE_OFFER:
      return {
        ...state,
        singleOffer: adaptOffer(action.payload),
        isSingleOfferLoaded: true,
        activeCity: adaptOffer(action.payload).city.name
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: sortCommentsByDate(action.payload)
      };

    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        offersNearby: adaptOffers(action.payload),
        areOffersNearbyLoaded: Math.random()
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: adaptOffers(action.payload),
        isDataLoaded: true
      };

    case ActionType.RELOAD_OFFERS:
      return {
        ...state,
        isDataLoaded: false
      };

    case ActionType.LOAD_FAVS:
      return {
        ...state,
        favs: adaptOffers(action.payload),
        arePrefsLoaded: true
      };

    case ActionType.RELOAD_FAVS:
      return {
        ...state,
        arePrefsLoaded: false
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

    default:
      return state;
  }
};
