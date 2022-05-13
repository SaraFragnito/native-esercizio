import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../utils/colors"
import Button from "./Button"

function ErrorOverlay(props){
  return <View style={styles.container}>
    <Text style={[styles.text, styles.title]}>An error occured</Text>
    <Text style={styles.text}>{props.message}</Text>
    <Button onPress={props.onConfirm}>Ok :(</Button>
  </View>
}

export default ErrorOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary700
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
    color: "white",
    fontSize: 18
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
})