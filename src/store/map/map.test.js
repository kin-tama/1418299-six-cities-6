import {changeActivePin} from "../action";

import {map} from "./map";

describe(`map reducer works correctly`, () => {
  it(`change active pin`, () => {
    const state = {activePin: 0};
    const action = changeActivePin(100500);

    expect(map(state, action))
    .toEqual({activePin: 100500});
  });
});
