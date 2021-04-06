import {redirect404} from "../action";

import {route} from "./route";

describe(`route reducer works correctly`, () => {
  it(`redirect true`, () => {
    const state = {isNotFound: false};
    const action = redirect404(true);

    expect(route(state, action))
    .toEqual({isNotFound: true});
  });

  it(`redirect false`, () => {
    const state = {isNotFound: false};
    const action = redirect404(false);

    expect(route(state, action))
    .toEqual({isNotFound: false});
  });

});
