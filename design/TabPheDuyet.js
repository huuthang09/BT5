import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import api from "../nhanvien.json";
import NhanvienItem from "../component/NhanvienItem";
import SortPicker from "../component/SortPicker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function TabPheDuyet() {

  return (
    <View style={styles.container}>
      <SortPicker/>

      <View style={styles.content}>
        <Text style={styles.txtProject}>DỰ ÁN 1</Text>
        <Text style={styles.txtPrice}>17.50</Text>
      </View>
      <FlatList
        data={api.project1}
        renderItem={({ item }) => NhanvienItem(item)}
        keyExtractor={(item) => item.id + ""}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  txtPrice: {
    fontSize: 18,
    color: "#F00",
    fontWeight: "bold",
    position: "absolute",
    left: wp("80%"),
  },

  txtProject: {
    color: "#b5b5b5",
    fontSize: 14,
    fontWeight: "bold",
  },

  content: {
    flexDirection: "row",
    marginTop: hp("2%"),
    marginLeft: wp("2%"),
    marginBottom: hp("2%"),
  },
});
