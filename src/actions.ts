import { BASE_URL } from "./lib/api";
import axios from "axios"

export async function getDatas() {
    const resp = await axios.get(BASE_URL + `products`)
    return resp.data 
}