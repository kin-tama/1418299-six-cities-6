import {combineReducers} from "redux";
import {data} from "./data/data";
import {user} from "./user/user";
import {map} from "./map/map";
import {route} from "./route/route";

export const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
  MAP: `MAP`,
  ROUTE: `ROUTE`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
  [NameSpace.MAP]: map,
  [NameSpace.ROUTE]: route
});
