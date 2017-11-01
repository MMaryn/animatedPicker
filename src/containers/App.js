import React from "react";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AnimatedPicker from "./AnimatedPicker";
import rootsReducers from "../reducers/rootReducer";

const rootReducer = combineReducers(rootsReducers);

//const store = crateStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const App = () => (
  <Provider store={store}>
    <AnimatedPicker />
  </Provider>
);

export default App;
