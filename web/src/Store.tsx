import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

/* reducer */
// import HomePageReducer from "@data/reducers/HomePageReducer";
// import CreatePageReducer from "@reducers/CreateCurationReducer";
import UserInfoReducer from "@data/reducers/UserInfoReducer";
import { StateType } from "@data/types/StateType";

const STORE_INITIAL = {};
const logger = createLogger();
const storeCreator = () => {
  const reducers = {
    // homePage: HomePageReducer,
    // createPage: CreatePageReducer,
    userInfo: UserInfoReducer,
  };
  const store = createStore(
    //@ts-ignore
    combineReducers<StateType>(reducers),
    STORE_INITIAL as Partial<StateType>,
    process.env.NODE_ENV === "production"
      ? applyMiddleware(...[thunk])
      : applyMiddleware(...[thunk, logger])
  );
  return store;
};

export default storeCreator;

export type StoreType = ReturnType<typeof storeCreator>;
