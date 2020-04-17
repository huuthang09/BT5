import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, CardItem, Right } from "native-base";
import { Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function NhanvienItem(item) {
  return (
    <View>
      <Card>
        <CardItem header>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.job}>{item.job}</Text>
          </View>
          <Right>
            <Text style={styles.date}>{item.date}</Text>
          </Right>
        </CardItem>

        <CardItem>
          <Text style={styles.title}>{item.title}</Text>
          <Right>
            <Text style={styles.number}>{item.number}</Text>
          </Right>
        </CardItem>

        <CardItem footer>
          <Button
            uppercase={false}
            contentStyle={{ width: wp("40%") }}
            mode="contained"
            color="#F00"
          >
            Từ chối
          </Button>

          <Right>
            <Button
              uppercase={false}
              contentStyle={{ width: wp("40%") }}
              style={{left:wp("5%")}}
              mode="contained"
              color="#4b9900"
            >
              Chấp thuận
            </Button>
          </Right>
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

  number: {
    fontSize: 30,
    fontWeight: "bold",
    left:wp("5%")
  },

  job: {
    fontSize: 14,
    color: "#b5b5b5",
  },

  title: {
    fontSize: 16,
    color: "#5f717c",
  },

  date: {
    fontSize: 14,
    color: "#b5b5b5",
    left:wp("5%")
  },
});
