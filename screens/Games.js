import { View, Text, StyleSheet } from "react-native"
import Button from "../components/Button"
import { Colors } from "../utils/colors"

function Games({navigation}){
  const pressQuiz = () => navigation.navigate("Quiz")
  const pressChuck = () => navigation.navigate("Chuck")
  const pressAddImage = () => navigation.navigate("AddImage")
  const pressFormatter = () => navigation.navigate("Formatter")

  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Text style={styles.text}>Take a quiz</Text>
          <Button onPress={pressQuiz}>Quiz</Button>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>Generate a random Chuck Norris quote</Text>
          <Button onPress={pressChuck}>Chuck</Button>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>Add an Image from your Camera</Text>
          <Button onPress={pressAddImage}>Add Image</Button>
        </View>
        <View style={styles.btn}>
          <Text style={styles.text}>Format a text</Text>
          <Button onPress={pressFormatter}>Formatter</Button>
        </View>
      </View>
    </View>
  )
}

export default Games

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  btnContainer: {
    marginVertical: 20,
  },
  btn: {
    marginVertical: 40,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: Colors.primary50,
    textAlign: "center",
    marginBottom: 10
  }
})