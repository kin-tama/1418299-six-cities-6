import {NameSpace} from "../root-reducer";

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getAuthorizedEmail = (state) => state[NameSpace.USER].authorizedEmail;
