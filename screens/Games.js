import { View, Text, StyleSheet } from "react-native"
import Button from "../components/Button"
import { Colors } from "../utils/colors"

function Games({navigation}){
  const pressQuiz = () => navigation.navigate("Quiz")
  const pressChuck = () => navigation.navigate("Chuck")

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
          <Text style={styles.text}>Boh, poi scopriremo cosa fargli fare</Text>
          <Button>Other</Button>
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