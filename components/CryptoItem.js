import { Text, StyleSheet, View, Image } from "react-native"
import { Colors } from "../utils/colors"

function CryptoItem({name, symbol, currentPrice, priceChangePercentage7d, logoUrl}){
  const priceChangeColor = priceChangePercentage7d > 0 ? "lightgreen" : "coral"

  return (
    <View style={styles.itemWrapper}>

      {/* left */}
      <View style={styles.leftWrapper}>
        <Image source={{uri: logoUrl}} style={styles.image} />
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
        </View>
      </View>

      {/* right */}
      <View style={styles.rightWrapper}>
        <Text style={styles.title}>€ {currentPrice.toLocaleString("it-IT", {currency: "EUR"})}</Text>
        <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
      </View>

    </View>

  )
}

export default CryptoItem

const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightWrapper: {
    alignItems: "flex-end"
  },
  image: {
    height: 48,
    width: 48
  },
  titlesWrapper: {
    marginLeft: 8
  },
  title: {
    fontSize: 18,
    color: Colors.primary50
  },
  subtitle: {
    fontSize: 14,
    color: Colors.primary200
  }
})