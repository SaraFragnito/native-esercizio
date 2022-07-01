// https://api.chucknorris.io/jokes/random
import axios from "axios"
import moment from "moment"

// Chuck Norris
export async function getQuote(){
  const response = await axios.get("https://api.chucknorris.io/jokes/random")
  let quote = {
    id: response.data.id,
    value: response.data.value
  }
  return quote
}

// Crypto app
const formatSparkline = (numbers) => {
  const sevenDaysAgo = moment().subtract(7, "days").unix()
  let formattedSparkline = numbers.map((item, index) => {
    return {
      x: sevenDaysAgo + (index+1)*3,
      y: item,
    }
  } )
  return formattedSparkline
}

const formatMarketData = (data) => {
  let formattedData = []
  data.forEach(item => {
    const formattedSparkline = formatSparkline(item.sparkline_in_7d.price)
    const formattedItem = {
      ...item,
      sparkline_in_7d: {
        price: formattedSparkline
      }
    }
    formattedData.push(formattedItem)
  })
  return formattedData
}

export async function getCrypto(){
  try {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d")
    const data = res.data
    const formattedRes = formatMarketData(data)
    return formattedRes
  } catch (error) {
    console.log(error.message)
  }
}
getCrypto()