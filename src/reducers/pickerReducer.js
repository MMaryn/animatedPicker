import * as actionTypes from "../core/actionTypes";
import { Animated } from "react-native";

import { colors } from "../core/constants";

const initialState = {
  previousColor: "rgb(0,0,0)",
  activeColor: colors.black,
  animatedValue: new Animated.Value(0)
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COLOR_PICKED: {
      const previousColor = state.activeColor;
      return Object.assign({}, state, {
        previousColor,
        activeColor: action.data.nextColor,
      })
    };
    default:
      return state;
  }
};
