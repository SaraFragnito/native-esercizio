import { View, Text, StyleSheet, Pressable, Modal } from "react-native"
import { useState } from "react"
import { Colors } from "../utils/colors"
import { QUESTIONS } from "../utils/questions"
import Button from "../components/Button"

// cambiare colori dei bottoni quando la risposta è stata data

function Quiz({route, navigation}){
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentSelectedAnswer, setCurrentSelectedAnswer] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const [isAnswerDisabled, setIsAnswerDisabled] = useState(false)
  const [score, setScore] = useState(0)
  const [showQuizFinal, setShowQuizFinal] = useState(false)

  const validateAnswer = (selectedAnswer) => {
    let curCorrectAnswer = QUESTIONS[currentIndex]["correctAnswer"]
    setCurrentSelectedAnswer(selectedAnswer)
    setCorrectAnswer(curCorrectAnswer)
    setIsAnswerDisabled(true)
    if (selectedAnswer==curCorrectAnswer) setScore(score+1)
  }

  const handleNext = () => {
    if(currentIndex == QUESTIONS.length-1){
      setShowQuizFinal(true)
    } else {
      setCurrentIndex(currentIndex+1)
      setCurrentSelectedAnswer(null)
      setCorrectAnswer(null)
      setIsAnswerDisabled(null)
    }
  }

  const handleRestart = () => {
    setShowQuizFinal(false)
    setScore(0)
    setCurrentIndex(0)
    setCurrentSelectedAnswer(null)
    setCorrectAnswer(null)
    setIsAnswerDisabled(null)
  }

  const goBack = () => navigation.navigate("AppList")

  return (
    <View style={styles.container}>
      <View style={styles.questionNumCont}>
        <Text style={styles.questionNum}>
          {currentIndex+1}/{QUESTIONS.length}
        </Text>
        <Text style={styles.questionNum}>score: {score}</Text>
      </View>
      <Text style={styles.question}>
        {QUESTIONS[currentIndex].question}
      </Text>
      <View>
        { QUESTIONS[currentIndex].answers.map(answer => (
         <Pressable
            key={answer}
            disabled={isAnswerDisabled ? true : false}
            onPress={() => validateAnswer(answer)}
            style={({pressed}) => [
              styles.option, 
              pressed && styles.pressed, 
              {
                backgroundColor: 
                  answer == correctAnswer ? "darkgreen" : 
                  answer == currentSelectedAnswer ? "darkred" : 
                  isAnswerDisabled ? "slategrey" : 
                  Colors.primary400
              }
            ]}
          > 
            <Text style={styles.optionText}>{answer}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.next}>
        <Pressable 
          disabled={currentSelectedAnswer ? false : true} 
          onPress={handleNext}
          style={({pressed}) => pressed && styles.pressed}
        >
        {currentSelectedAnswer ? 
          <Text style={styles.nextText}>Vai alla prossima domanda</Text> :
          <Text style={[styles.nextText, {color: "slategrey"}]}>Scegli una risposta!</Text> }
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        trasparent={true}
        visible={showQuizFinal}
      >
        <View style={[styles.container, styles.finalContainer]}>
          <Text style={styles.finalText}>Punteggio finale:</Text>
          <Text style={[styles.finalText, score > QUESTIONS.length/2 ? {color: "lightgreen"} : {color: "red"} ]}> {score}/{QUESTIONS.length}</Text>
          {score > QUESTIONS.length/2 ?
            <Text style={styles.finalText}>Hai vinto!</Text> :
            <Text style={styles.finalText}>Hai perso!</Text>
          }
          <Button onPress={handleRestart}>Ritenta</Button>
          <Button onPress={goBack}>Torna alla schermata principale</Button>
        </View>
      </Modal>
          
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    color: Colors.primary50,
  },
  questionNumCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  questionNum: {
    fontSize: 25,
    color: Colors.primary100,
    margin: 20
  },
  question:{
    fontSize: 30,
    color: Colors.primary50,
    margin: 20
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20
  },
  option: {
    backgroundColor: Colors.primary400,
    borderRadius: 5,
    width: "100%",
    marginTop: 10,
    padding: 10,
  },
  optionText: {
    textAlign: "center",
    color: Colors.primary50,
    fontSize: 20,
    fontWeight: "bold"
  },
  next: {
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: Colors.primary400,
    borderWidth: 3,
    width: "100%",
    marginTop: 40,
    padding: 15,
  },
  nextText: {
    textAlign: "center",
    color: Colors.primary50,
    fontSize: 20,
    fontWeight: "bold"
  },
  finalContainer: {
    backgroundColor: Colors.primary700,
    paddingVertical: 200
  },
  finalText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 30,
      paddingVertical: 30,
      color: Colors.primary50
    },
  pressed: {
    opacity: 0.7
  },
})