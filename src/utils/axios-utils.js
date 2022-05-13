import axios from 'axios'
import {BASE_URL} from "./config";

export const Client = axios.create(
    {
        baseURL: BASE_URL,
        headers: {'Content-Type': 'application/json'}
    }
)