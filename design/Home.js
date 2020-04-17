import React from 'react';
import { StyleSheet, View } from 'react-native';
import Toolbar from "../component/Toolbar";
import TabComponent from "../component/Tabs";

export default function Home() {
  return (
    <View style={styles.container}>
      <Toolbar/>
      <TabComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
