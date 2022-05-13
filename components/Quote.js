import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../utils/colors"

function Chuck(props){
  return (
    <View style={styles.container}>
      <Text style={styles.text} key={props.quoteId}>{props.quoteValue}</Text>
    </View>
  )
}

export default Chuck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 30,
    padding: 30
  },
  text: {
    color: Colors.primary50,
    fontSize: 25,
    textAlign: "center"
  }
})