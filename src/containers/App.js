import React from "react";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AnimatedPicker from "./AnimatedPicker";
import rootsReducers from "../reducers/_indexReducer";

const rootReducer = combineReducers(rootsReducers);

//const store = createStore(rootReducer, applyMiddleware(thunk));
const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

const App = () => (
  <Provider store={store}>
    <AnimatedPicker />
  </Provider>
);

export default App;
