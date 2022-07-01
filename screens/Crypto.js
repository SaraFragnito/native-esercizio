import { View, Text, StyleSheet, FlatList } from "react-native"
import { useState, useEffect } from "react"
import { Colors } from "../utils/colors"
import CryptoItem from "../components/CryptoItem"
import LoadingOverlay from "../components/LoadingOverlay"
import ErrorOverlay from "../components/ErrorOverlay"
import { getCrypto } from "../utils/fetched"

function Crypto(){
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  const [fetchedCrypto, setFetchedCrypto] = useState()

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getCrypto()
      setData(marketData)
    }
    fetchMarketData()
  }, [])

  const errorHandler = () => setError(null)

  if (error && !isFetching) return <ErrorOverlay message={error} onConfirm={errorHandler} />
 
  { isFetching && <LoadingOverlay /> }

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>Cryptos today</Text>
      </View>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({item}) => (
          <CryptoItem
            name={item.name}
            symbol={item.symbol}
            logoUrl={item.image}
            currentPrice={item.current_price}
            priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
          />  
        )}
      />
    </View>
  )
}


export default Crypto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  text: {
    color: Colors.primary50,
    fontSize: 25,
    textAlign: "center"
  },
  titleWrapper: {
    borderBottomColor: Colors.primary100,
    borderBottomWidth: 3,
    paddingBottom: 10,
  }
})