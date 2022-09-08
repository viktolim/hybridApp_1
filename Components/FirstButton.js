import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const FirstButton = ({ title, style, index, pressed }) => {
  return (
    <TouchableOpacity
      onPress={(p) => {
        pressed(index);
        return pressed;
      }}
    >
      <View style={[styles.button, style]}>
        <Text style={{ fontWeight: "bold" }}>
          {title} {index}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "#A084CA",
    borderWidth: 8,
    alignItems: "center",
    paddingHorizontal: 45,
    paddingVertical: 10,
    backgroundColor: "white",
    alignSelf: "center",
    margin: 18,
  },
});
export default FirstButton;
