import { StyleSheet, View, Text, TextInput, Pressable } from "react-native"
import { useState } from "react";
import * as Clipboard from 'expo-clipboard';
import Button from "../components/Button"
import { Colors } from "../utils/colors"

function Formatter(){
  const [inputText, setInputText] = useState("")
  const [fontSize, setFontSize] = useState(20)
  const [fontColor, setFontColor] = useState("white")
  const [font, setFont] = useState("")

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(inputText)
    };

  const inputHandler = (enteredText) => setInputText(enteredText)

  const decreaseSize = () => setFontSize(fontSize-4)
  const increaseSize = () => setFontSize(fontSize+4)
  const blackText = () => setFontColor("black")
  const blueText = () => setFontColor(Colors.primary400)
  const fontMacondo = () => setFont("macondo")
  const fontSmooch = () => setFont("smooch")

  const reset = () => {
    setFontSize(20)
    setFontColor("white")
    setFont("")
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
        <Button onPress={blackText}>black</Button>
        <Button onPress={blueText}>blue</Button>
        <Button onPress={decreaseSize}>-</Button>
        <Button onPress={increaseSize}>+</Button>
        <Button onPress={fontMacondo}>Macondo</Button>
        <Button onPress={fontSmooch}>Smooch</Button>
      </View>
      <View style={styles.optionsContainer}>
        <Pressable style={({pressed}) => [styles.reset, pressed && styles.pressed]} onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.printedText}>
        <Text style={styles.text}>Il tuo testo:</Text>
        <Text style={[styles.text, {fontSize: fontSize, color: fontColor,fontFamily: font}]}>{inputText}</Text>
      </View>
      <View style={styles.optionsContainer}>
        <Pressable style={({pressed}) => [styles.reset, pressed && styles.pressed]} onPress={copyToClipboard}>
          <Text style={styles.resetText}>Copy</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Formatter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: Colors.primary50,
    marginTop: 30
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.primary50,
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
    borderTopWidth: 1,
    borderTopColor: Colors.primary100,
    width: 80,
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 5
  },
  resetText: {
    color: Colors.primary100,
    fontSize: 15,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7
  },
})