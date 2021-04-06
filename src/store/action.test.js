import {
  ActionType,
  redirect404,
  changeCity,
  changeSortStatus,
  changeSortType,
  changeActivePin,
  loadOffers,
  reloadOffers,
  loadFavs,
  reloadFavs,
  loadOffersNearby,
  loadSingleOffer,
  getComments,
  checkAuthorization,
  getEmail
} from "./action";

import {SortTypes, Cities} from "../const/const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing sort status`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_STATUS
    };
    expect(changeSortStatus()).toEqual(expectedAction);
  });

  it(`Action creator for changing sort type to Popular`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypes.POPULAR
    };

    expect(changeSortType(SortTypes.POPULAR)).toEqual(expectedAction);
  });

  it(`Action creator for changing sort type to price high to low`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypes.PRICE_HIGH_TO_LOW
    };

    expect(changeSortType(SortTypes.PRICE_HIGH_TO_LOW)).toEqual(expectedAction);
  });

  it(`Action creator for changing sort type to price low to high`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypes.PRICE_LOW_TO_HIGH
    };

    expect(changeSortType(SortTypes.PRICE_LOW_TO_HIGH)).toEqual(expectedAction);
  });

  it(`Action creator for changing sort type to rating high to low`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypes.RATING_HIGH_TO_LOW
    };

    expect(changeSortType(SortTypes.RATING_HIGH_TO_LOW)).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Amsterdam`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[0]
    };
    expect(changeCity(Object.keys(Cities)[0])).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Paris`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[1]
    };
    expect(changeCity(Object.keys(Cities)[1])).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Cologne`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[2]
    };
    expect(changeCity(Object.keys(Cities)[2])).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Brussels`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[3]
    };
    expect(changeCity(Object.keys(Cities)[3])).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Hamburg`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[4]
    };
    expect(changeCity(Object.keys(Cities)[4])).toEqual(expectedAction);
  });

  it(`Action creator for changing city to Dusseldorf`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: Object.keys(Cities)[5]
    };
    expect(changeCity(Object.keys(Cities)[5])).toEqual(expectedAction);
  });

  it(`Action creator for changing active pin`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_ACTIVE_PIN,
      payload: `testing`
    };

    expect(changeActivePin(`testing`)).toEqual(expectedAction);
  });

  it(`Action creator for redirect 404 on`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_404,
      payload: true
    };

    expect(redirect404(true)).toEqual(expectedAction);
  });

  it(`Action creator for redirect 404 off`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_404,
      payload: false
    };

    expect(redirect404(false)).toEqual(expectedAction);
  });

  it(`Action creator for load offers`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(loadOffers({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for reload offers`, () => {
    const expectedAction = {
      type: ActionType.RELOAD_OFFERS,
    };

    expect(reloadOffers()).toEqual(expectedAction);
  });

  it(`Action creator for load favoites`, () => {
    const expectedAction = {
      type: ActionType.LOAD_FAVS,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(loadFavs({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for reload favorites`, () => {
    const expectedAction = {
      type: ActionType.RELOAD_FAVS,
    };

    expect(reloadFavs()).toEqual(expectedAction);
  });

  it(`Action creator for load nearby`, () => {
    const expectedAction = {
      type: ActionType.LOAD_NEARBY,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(loadOffersNearby({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for load single offer`, () => {
    const expectedAction = {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(loadSingleOffer({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for loading comments`, () => {
    const expectedAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(getComments({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for checking authorization`, () => {
    const expectedAction = {
      type: ActionType.CHECK_AUTHORIZATION,
      payload: {ANYTHING: `ANYTHING`}
    };

    expect(checkAuthorization({ANYTHING: `ANYTHING`})).toEqual(expectedAction);
  });

  it(`Action creator for getting email`, () => {
    const expectedAction = {
      type: ActionType.GET_EMAIL,
      payload: `anyString`
    };

    expect(getEmail(`anyString`)).toEqual(expectedAction);
  });
});
