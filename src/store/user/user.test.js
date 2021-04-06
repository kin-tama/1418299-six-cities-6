import {
  getEmail,
  checkAuthorization
} from "../action";

import {user} from "./user";

describe(`user reducer works correctly`, () => {
  it(`check email`, () => {
    const state = {authorizedEmail: `none`};
    const action = getEmail(`testing@testing.com`);

    expect(user(state, action))
    .toEqual({authorizedEmail: `testing@testing.com`});
  });

  it(`check authorization`, () => {
    const state = {authorizedEmail: `none`};
    const authorizedAction = checkAuthorization(`testing@testing.com`);

    expect(user(state, authorizedAction))
    .toEqual({
      authorizedEmail: `testing@testing.com`,
      authorizationStatus: true
    });

    const unauthorizedAction = checkAuthorization(false);

    expect(user(state, unauthorizedAction))
    .toEqual({
      authorizedEmail: `none`,
      authorizationStatus: false
    });
  });
});
