import { StyleSheet, Text, View } from "react-native";

const FirstText = ({ title, style }) => {
  return (
    <View style={[styles.button, style]}>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: "orange",
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
export default FirstText;
