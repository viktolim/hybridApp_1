import React, { useState, useEffect, useReducer } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import FirstButton from "./Components/FirstButton";
import FirstText from "./Components/FirstText";
var a = 0;
const app = function App() {
  const [z, b] = useState([]);

  const reducer = (state, action) => {
    state[action] = !state[action];
    b([]);
    return state;
  };
  const [state, dispatch] = useReducer(reducer, [false, false, false, false]);
  return (
    <>
      <View style={styles.footer}>
        <View style={styles.row}>
          <FlatList
            data={[1, 2]}
            renderItem={({ item }) => {
              return (
                <FirstButton
                  title="Button"
                  index={item}
                  pressed={(pressed) => {
                    dispatch(pressed - 1);
                  }}
                />
              );
            }}
          />
          <FlatList
            data={[3, 4]}
            renderItem={({ item }) => (
              <FirstButton
                title="Button"
                index={item}
                pressed={(pressed) => {
                  dispatch(pressed - 1);
                }}
              />
            )}
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <FlatList
            data={state}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <FirstText
                    title="Text"
                    index={index + 1}
                    style={
                      state[index]
                        ? { backgroundColor: "#BFACE0" }
                        : { backgroundColor: "white" }
                    }
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "#645CAA",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#BFACE0",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});
export default app;
