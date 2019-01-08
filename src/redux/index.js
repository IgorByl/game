import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export function configureStore(initialState) {
  const ehancers = compose(
    applyMiddleware(thunk),
    composeWithDevTools()
  );
  return createStore(rootReducer, initialState, ehancers);
}
