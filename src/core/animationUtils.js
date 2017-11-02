import { Animated, Easing } from "react-native";

export const animate = (value) => {
  value.setValue(0);
  Animated.timing(value, {
    toValue: 1,
    duration: 1000,
    easing: Easing.linear
  }).start();
};
