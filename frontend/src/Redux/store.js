import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { collectionsReducer } from "./Collections/reducer";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  collectionsBarReducer: collectionsReducer,
});
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
