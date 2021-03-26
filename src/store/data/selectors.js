import {NameSpace} from "../root-reducer";

export const getActiveCity = (state) => state[NameSpace.DATA].activeCity;
export const getActiveSortType = (state) => state[NameSpace.DATA].activeSortType;
export const getActiveSortChoose = (state) => state[NameSpace.DATA].activeSortChoose;
export const getAuthorizationStatus = (state) => state[NameSpace.DATA].authorizationStatus;

export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavs = (state) => state[NameSpace.DATA].favs;
export const getArePrefsLoaded = (state) => state[NameSpace.DATA].arePrefsLoaded;
export const getIsSingleOfferLoaded = (state) => state[NameSpace.DATA].isSingleOfferLoaded;
export const getSingleOffer = (state) => state[NameSpace.DATA].singleOffer;
export const getComments = (state) => state[NameSpace.DATA].comments;
export const getOffersNearby = (state) => state[NameSpace.DATA].offersNearby;
export const getActivePin = (state) => state[NameSpace.DATA].activePin;
