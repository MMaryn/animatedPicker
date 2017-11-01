import * as actionTypes from "../core/actionTypes";
import { Animated } from "react-native";

const colors = {
  black: "rgb(3, 2,3)",
  orange: "rgb(194, 122, 55)",
  green: "rgb(41, 91, 33)",
  yellow: "rgb(210, 205, 81)",
  pink: "rgb(195, 148, 158)",
  grey: "rgb(153, 152, 153)"
}

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
