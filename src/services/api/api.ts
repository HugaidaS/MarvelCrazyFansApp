import axios from "axios"
import md5 from "js-md5"

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY
const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY

const ts = +new Date()

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    apikey: PUBLIC_KEY,
    ts: ts,
    hash: md5
      .create()
      .update(ts + (PRIVATE_KEY ? PRIVATE_KEY : "") + PUBLIC_KEY)
      .toString()
  }
})

export default api;
