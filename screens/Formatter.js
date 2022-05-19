import { StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import { useState } from "react";
import Button from "../components/Button"
import { Colors } from "../utils/colors"

function Formatter(){
  const [inputText, setInputText] = useState("")
  const [fontSize, setFontSize] = useState(20)
  const [fontColor, setFontColor] = useState("white")

  const inputHandler = (enteredText) => setInputText(enteredText)

  let size

  const decreaseSize = () => {
    size = fontSize - 4
    setFontSize(size)
  }

  const increaseSize = () => {
    size = fontSize + 4
    setFontSize(size)
  }

  const blackFont = () => setFontColor("black")
  const blueFont = () => setFontColor("blue")

  const reset = () => {
    setFontSize(20)
    setFontColor("white")
  }
    

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput} 
        onChangeText={inputHandler} 
        value={inputText}
        placeholder="Your text here..."
      />
      </View>
      <View style={styles.optionsContainer}>
        <Button onPress={decreaseSize}>Rimpicciolisci</Button>
        <Button onPress={increaseSize}>Ingrandisci</Button>
      </View>
      <View style={styles.optionsContainer}>
        <Button onPress={blackFont}>Testo nero</Button>
        <Button onPress={blueFont}>Testo blu</Button>
      </View>
      <View style={styles.optionsContainer}>
        <Pressable style={({pressed}) => [styles.reset, pressed && styles.pressed]} onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.printedText}>
        <Text style={styles.text}>Il tuo testo:</Text>
        <Text style={[styles.text, {fontSize: fontSize, color: fontColor}]}>{inputText}</Text>
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
    marginVertical: 20
  },
  textInput: {
    backgroundColor: Colors.primary100,
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10
  },
  printedText: {
    marginTop: 10,
    padding: 30,
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderColor: Colors.primary400,
    borderWidth: 3,
  },
  reset: {
    borderTopWidth: 2,
    borderTopColor: Colors.primary100,
    width: 100,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 5
  },
  resetText: {
    color: Colors.primary100,
    fontSize: 20,
    fontWeight: "bold"
  },
  pressed: {
    opacity: 0.7
  },
})