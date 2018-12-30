import axios from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer
} from "axios-extensions";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: { "Cache-Control": "no-cache" },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter!)
  )
});
