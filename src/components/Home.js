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
    width: "65%",
    borderColor: "#ddd",
    marginBottom: 10,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  preview: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
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

    const interpolateWidth = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 300]
    });

    const interpolateBorderRadius = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 200]
    });


    const interpolateHeight = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 300]
    });

    const interpolateScale = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 2]
    });

    const animatedStyle = {
      backgroundColor: interpolateColor,
      height: interpolateHeight,
      borderRadius: interpolateBorderRadius,
      width: interpolateWidth,
      transform: [{ scale: interpolateScale }],
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
