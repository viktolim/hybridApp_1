import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FirstButton = ({ title, style, pressed }) => {
  return (
    <TouchableOpacity onPress={pressed}>
      <View style={[styles.button, style]}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "yellow",
    borderWidth: 8,
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    margin: 18,
  },
});
export default FirstButton;
