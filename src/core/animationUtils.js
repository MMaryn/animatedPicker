import { Animated, Easing } from "react-native";

export const animate = (value) => {
  value.setValue(0);
  Animated.timing(value, {
    toValue: 1,
    duration: 500,
    easing: Easing.ease
  }).start();
};
