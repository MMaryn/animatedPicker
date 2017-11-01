import * as actionTypes from "../core/actionTypes";
import { animate } from "../core/animationUtils";

const choseColorSync = (nextColor) => ({
  type: actionTypes.COLOR_PICKED,
  data: { nextColor }
});

export const choseColor = nextColor => (dispatch, getState) => {
  const { color } = getState();

  animate(color.animatedValue);
  dispatch(choseColorSync(nextColor));
};
