import { BROWSER_WINDOW_RESIZED } from "@actions/BrowserActions";
import type { ActionType } from "@type/BrowserActionTypes";
import type { StateType } from "@type/BrowserTypes";

export default (
  state: StateType = {
    width: 0,
    height: 0,
  },
  action: ActionType
): StateType => {
  switch (action.type) {
    case BROWSER_WINDOW_RESIZED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};
