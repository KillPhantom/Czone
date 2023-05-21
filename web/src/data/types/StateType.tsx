// import type { StateType as HomePageStateType } from "./HomePageStateType";
// import type { StateType as CreatePageStateType } from "./CreatePageStateType";
import type { StateType as UserStateType } from "@type/UserStateTypes";
import type { StateType as BrowserStateType } from "@type/BrowserTypes";

export type StateType = {
  userInfo: UserStateType;
  browser: BrowserStateType;
};
