import { StyleSheet, View } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";

export function Toolbar() {
  return (
    <View>
      <Appbar.Header style={styles.appBarStyle}>
        <Appbar.Action icon="chevron-left" size={30} />
        <Appbar.Content title="Chấm công" />
        <Appbar.Action icon="bell-ring" size={30} />
      </Appbar.Header>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
    backgroundColor: "#FFF",
  },
});

export default Toolbar;
