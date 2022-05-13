// https://api.chucknorris.io/jokes/random
import axios from "axios"

export async function getQuote(){
  const response = await axios.get("https://api.chucknorris.io/jokes/random")
  let quote = {
    id: response.data.id,
    value: response.data.value
  }
  return quote
}
