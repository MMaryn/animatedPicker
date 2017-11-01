import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Actions from "../actions/rootAction";
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

export default connect(mapStateToProps, mapActionsToProps)(AnimatedPicker);
