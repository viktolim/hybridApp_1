import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FirstButton from "./Components/FirstButton";
import FirstText from "./Components/FirstText";

export default function App() {
  const [clicked, changeClick] = useState(
    {
      first: "false",
    },
    {
      second: "false",
    },
    {
      third: "false",
    },
    {
      fow: "false",
    }
  );
  console.log(clicked);
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.row}>
          <FirstButton
            title="Button 1"
            pressed={() => {
              if (clicked.first)
                changeClick([{ ...clicked }, { first: "true" }]);
              else {
                changeClick([{ ...clicked }, { first: "false" }]);
              }
            }}
          />
          <FirstButton title="Button 2" />
        </View>
        <View style={styles.row}>
          <FirstButton title="Button 3" />
          <FirstButton title="Button 4" />
        </View>
      </View>
      <View style={styles.body}>
        <View>
          {clicked.first ? (
            <FirstText title="Text 1" />
          ) : (
            <FirstText title="Text 1" style={{ backgroundColor: "red" }} />
          )}
          {clicked.second ? (
            <FirstText title="Text 2" />
          ) : (
            <FirstText title="Text 2" style={{ backgroundColor: "red" }} />
          )}
          {clicked.third ? (
            <FirstText title="Text 3" />
          ) : (
            <FirstText title="Text 3" style={{ backgroundColor: "red" }} />
          )}
          {clicked.fow ? (
            <FirstText title="Text 4" />
          ) : (
            <FirstText title="Text 4" style={{ backgroundColor: "red" }} />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});
