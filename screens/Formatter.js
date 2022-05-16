import { StyleSheet, View, Text, TextInput } from "react-native"
import Button from "../components/Button"
import { Colors } from "../utils/colors"

function Formatter(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Text Formatter
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}>hhh</TextInput>
        <Button>Boh</Button>
      </View>
      <View style={styles.optionsContainer}>
        <Button>abc</Button>
        <Button>def</Button>
        <Button>ghi</Button>
        <Button>lmn</Button>
        <Button>opq</Button>
      </View>
      <View style={styles.printedText}>
        <Text style={styles.text}>Prova prova check check bla bla bla</Text>
      </View>
    </View>
  )
}

export default Formatter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: Colors.primary50,
    marginTop: 30
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: Colors.primary50
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 20
  },
  textInput: {
    backgroundColor: Colors.primary100,
    width: "80%",
    padding: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  printedText: {
    marginTop: 70,
    padding: 30,
    borderTopEndRadius: 50,
    borderBottomLeftRadius: 50,
    borderColor: Colors.primary400,
    borderWidth: 3,
  },
})