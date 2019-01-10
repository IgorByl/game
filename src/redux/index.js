import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";



export function configureStore(initialState) {
  const ehancers = compose(
    applyMiddleware(thunk),
    // composeWithDevTools()
    window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f
  );
  return createStore(rootReducer, initialState, ehancers);
}
