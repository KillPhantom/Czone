/* Actions */
import {
  SET_USER_AUTH_TOKEN,
  GET_USER_TOPICS_FULFILLED,
} from "../actions/UserActions";
/* Types */
import type { StateType } from "@type/UserStateTypes";

/* Actions */
import type { ActionType } from "../actions/UserActionTypes";

const DEFAULT_STATE = {
  userPublicAddress: "",
  authToken: "",
};

const UserInfoReducer = (
  state: StateType = DEFAULT_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case SET_USER_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    default:
      //   ((checkType: never) => checkType)(action);
      break;
  }

  return state;
};
export default UserInfoReducer;
