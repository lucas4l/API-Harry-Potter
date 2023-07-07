import axios from 'axios'

export async function ApiGet() {
  const API_URL = 'https://hp-api.onrender.com/api/characters'

  const responseAPI = await axios.get(API_URL)
  console.log(responseAPI.data)

  return responseAPI.data
}
