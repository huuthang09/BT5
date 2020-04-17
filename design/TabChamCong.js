import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import api from "../duan.json";
import ProjectItem from "../component/ProjectItem";
import TotalLayout from "../component/TotalLayout";
import DatePicker from "../component/DatePicker";


export default function TabChamCong() {
  return (
    <View style={styles.container}>
    <DatePicker/>
      
      <FlatList
        data={api}
        renderItem={({ item }) => ProjectItem(item)}
        keyExtractor={(item) => item.id + ""}
      />
      <TotalLayout/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
