import React from "react";
import { Container, Tab, Tabs } from "native-base";
import TabPheDuyet from "../design/TabPheDuyet";
import TabChamCong from "../design/TabChamCong";

export function TabComponent() {
  return (
    <Container>
      <Tabs 
      page={1}
      initialPage={1}
      tabBarUnderlineStyle={{ backgroundColor: "#F00" }}>
        <Tab
          textStyle={{ color: "#C2C2C2" }}
          activeTextStyle={{ color: "#F00" }}
          activeTabStyle={{ backgroundColor: "#FFF" }}
          tabStyle={{ backgroundColor: "#FFF" }}
          heading="Tổng quan"
        ></Tab>
        <Tab
          textStyle={{ color: "#C2C2C2" }}
          activeTextStyle={{ color: "#F00" }}
          activeTabStyle={{ backgroundColor: "#FFF" }}
          tabStyle={{ backgroundColor: "#FFF" }}
          heading="Chấm công"
        >
          <TabChamCong />
        </Tab>
        <Tab
          textStyle={{ color: "#C2C2C2" }}
          activeTextStyle={{ color: "#F00" }}
          activeTabStyle={{ backgroundColor: "#FFF" }}
          tabStyle={{ backgroundColor: "#FFF" }}
          heading="Phê duyệt"
        >
          <TabPheDuyet />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default TabComponent;
