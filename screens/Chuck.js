import { View, StyleSheet } from "react-native"
import { useState } from "react"
import Button from "../components/Button"
import Quote from "../components/Quote"
import LoadingOverlay from "../components/LoadingOverlay"
import ErrorOverlay from "../components/ErrorOverlay"
import { Colors } from "../utils/colors"
import { getQuote } from "../utils/quotes"
//prima pagina: clicca il bottone per ricevere una quote, bottone per caricare una quote, disabilitare bottone con loading, poi sotto compare citazione e il bottone si riabilita

function Chuck(){
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  const [fetchedQuote, setFetchedQuote] = useState()

  async function fetchQuote(){
    setIsFetching(true)
    try {
      const quote = await getQuote()
      setFetchedQuote(quote)
    } catch (error) {
      setError("No quote found. Try again later, if Chuck Norris doesn't kill you first.")
    }
    setIsFetching(false)
  }

  const errorHandler = () => setError(null)

  if (error && !isFetching) return <ErrorOverlay message={error} onConfirm={errorHandler} />
 
  { isFetching && <LoadingOverlay /> }
  
  return (
    <View style={styles.container}>
      <Button onPress={fetchQuote}>Generate Quote!</Button>
        { fetchedQuote &&  
          <Quote
            quoteId={fetchedQuote.id} 
            quoteValue={fetchedQuote.value} 
          /> 
        }
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