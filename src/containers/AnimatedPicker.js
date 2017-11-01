import React from "react";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import HomeScreen from "./App";
import rootsReducers from "../reducers/rootReducer";

const rootReducer = combineReducers(rootsReducers);

//const store = crateStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const AnimaterPicker = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default AnimaterPicker;
