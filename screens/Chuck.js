import { View, StyleSheet } from "react-native"
import { useState } from "react"
import * as Clipboard from 'expo-clipboard';

import Button from "../components/Button"
import Quote from "../components/Quote"
import LoadingOverlay from "../components/LoadingOverlay"
import ErrorOverlay from "../components/ErrorOverlay"
import { Colors } from "../utils/colors"
import { getQuote } from "../utils/fetched"

function Chuck(){
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  const [fetchedQuote, setFetchedQuote] = useState()

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(fetchedQuote.value)
    };

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
      <View> 
        <Quote
          quoteId={fetchedQuote.id} 
          quoteValue={fetchedQuote.value} 
        /> 
        <Button onPress={copyToClipboard}>Click to copy</Button>
      </View>
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