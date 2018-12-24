import axios from "axios";
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer
} from "axios-extensions";

export const api = axios.create({
  baseURL: "http://45.79.20.223/",
  headers: { "Cache-Control": "no-cache" },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter!)
  )
});
