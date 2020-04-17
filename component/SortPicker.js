import React, { useState } from "react";
import {Picker} from "react-native";

export default function SortPicker() {
  const [selectedValue, setSelectedValue] = useState("xyz");

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      style={{ height: 50 }}
    >
      <Picker.Item color="#6c7c87" label="Lọc theo XYZ" value="xyz" />
      <Picker.Item color="#6c7c87" label="Lọc theo ZYX" value="zyx" />
    </Picker>
  );
}
