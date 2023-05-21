import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { throttle } from "lodash";

/* reducer */
// import HomePageReducer from "@data/reducers/HomePageReducer";
// import CreatePageReducer from "@reducers/CreateCurationReducer";
import UserInfoReducer from "@data/reducers/UserInfoReducer";
import BrowserReducer from "@reducers/BrowserReducer";
import { StateType } from "@data/types/StateType";
import { BrowserWindowResized } from "@actions/BrowserActions";

const STORE_INITIAL = {};
const logger = createLogger();
const storeCreator = () => {
  const reducers = {
    // homePage: HomePageReducer,
    // createPage: CreatePageReducer,
    userInfo: UserInfoReducer,
    browser: BrowserReducer,
  };
  const store = createStore(
    //@ts-ignore
    combineReducers<StateType>(reducers),
    STORE_INITIAL as Partial<StateType>,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(...[thunk])
      : applyMiddleware(...[thunk, logger])
  );
  store.dispatch(BrowserWindowResized(window.innerWidth, window.innerHeight));

  window.addEventListener(
    "resize",
    throttle(() => {
      store.dispatch(
        BrowserWindowResized(window.innerWidth, window.innerHeight)
      );
    }, 1000)
  );
  return store;
};

export default storeCreator;

export type StoreType = ReturnType<typeof storeCreator>;
