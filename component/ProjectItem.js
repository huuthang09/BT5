import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, CardItem} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ProjectItem(item) {
  return (
    <View>
      <Card>
        <CardItem header>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.job}>{item.job}</Text>
          </View>
          <View style={styles.statusright}>
            <Text style={item.status=="Đang chờ duyệt"?styles.choduyet:styles.pheduyet}>{item.status}</Text>
          </View>
        </CardItem>
        <CardItem>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.right}>
            <Text style={styles.number}>{item.number}</Text>
          </View>
        </CardItem>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  statusright:{
    position:'absolute', left:wp("65%")
  },

  right:{
    position:'absolute', left:wp("80%")
  },

  number: {
    fontSize: 30,
    fontWeight: "bold",
  },

  job: {
    fontSize: 14,
    color: "#b5b5b5",
  },

  title: {
    fontSize: 16,
    color: "#5f717c",
  },

  choduyet: {
    padding: 5,
    backgroundColor:'#ffefe3',
    fontSize: 14,
    color: "#e35d00",
  },

  pheduyet: {
    padding: 5,
    backgroundColor:'#edffdc',
    fontSize: 14,
    color: "#74b237",
  },
});
