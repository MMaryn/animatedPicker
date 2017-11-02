import React, { Component } from "react";
import { combineReducers, createStore, applyMiddleware, bindActionCreators, compose } from "redux";
import { Provider, connect } from "react-redux";
import thunk from "redux-thunk";

import rootsReducers from "../reducers/_indexReducer";

import Actions from "../actions/_indexAction";
import Home from "../components/Home";

class AnimatedPicker extends Component {
  render() {
    return (
      <Home store={this.props.store} actions={this.props.actions} />
    )
  }
}

const mapStateToProps = state => ({
  store: state
});

const mapActionsToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const AnimatedPickerContainer = connect(mapStateToProps, mapActionsToProps)(AnimatedPicker);

const rootReducer = combineReducers(rootsReducers);
const store = compose(applyMiddleware(thunk))(createStore)(rootReducer);

const App = () => (
  <Provider store={store}>
    <AnimatedPickerContainer />
  </Provider>
);

export default App;
