import React, { Component } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export class PlayButton extends Component {
  render() {
    const { handlePress } = this.props;
    return (
      <Pressable onPress={() => handlePress()} style={styles.button}>
        <Icon name={"caret-forward-outline"} size={30} color="#fff" />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: "center",
    borderRadius: 50,
    width: 50,
    padding: 10,
    backgroundColor: "#3333",
  },
});
export default PlayButton;
