import React, { Component } from "react"
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import { colors } from "../core/constants";

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  renderScreen: {
    flex: 0.7,
    width: "50%",
    borderColor: "#ddd",
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    height: 40,
    width: 40,
    borderRadius: 50,
    margin: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  controllbtn: {
    flexDirection: "row",
    alignItems: "center",
  },
};

const Item = ({ color, isActive, pressInHandler }) => {
  return (
    <TouchableWithoutFeedback
      onPressIn={() => pressInHandler(color)}>
      <View
        style={[styles.buttons, { backgroundColor: color }]}
      >
        {isActive &&
          <Icon
            name="ios-checkmark"
            size={60}
            color="#ddd"
          />
        }
      </View>
    </TouchableWithoutFeedback >
  )
};

class Home extends Component {
  getAnimationStyle() {
    const {
      activeColor,
      previousColor,
      animatedValue
    } = this.props.store.color;

    const interpolateColor = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [previousColor, activeColor]
    });

    const interpolateBorderRadius = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 20]
    });

    const interpolateWidth = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"]
    });

    const interpolateHeight = animatedValue.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: ["0%", "70%", "100%"]
    });

    const animatedStyle = {
      backgroundColor: interpolateColor,
      height: interpolateHeight,
      width: interpolateWidth,
      borderRadius: interpolateBorderRadius,
      transform: [{ scale: animatedValue }],
    };

    return animatedStyle;
  }

  render() {
    const { store, actions } = this.props;
    const animatedStyle = this.getAnimationStyle();

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.renderScreen, { backgroundColor: store.color.previousColor }]}>
          <Animated.View style={[styles.preview, animatedStyle]} />
        </Animated.View>
        <View style={styles.controllbtn}>
          {Object.keys(colors).map(colorName => (
            <Item
              key={colorName}
              color={colors[colorName]}
              isActive={colors[colorName] === store.color.activeColor}
              pressInHandler={(...args) => actions.choseColor(...args)}
            />
          ))}
        </View>
      </View>
    )
  }
}

export default Home;
