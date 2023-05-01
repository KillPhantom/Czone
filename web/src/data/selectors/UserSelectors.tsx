/* Types */
import { getAuthTokenCookie } from "@data/utils/Cookie";
import type { StateType } from "../types/StateType";

// Selectors
export const getUserInfoData = (state: StateType) => state.userInfo;

export const getUserAuthToken = (state: StateType) =>
  getUserInfoData(state).authToken || getAuthTokenCookie();

export const isLoggedIn = (state: StateType) =>
  Boolean(getAuthTokenCookie() || getUserAuthToken(state));
