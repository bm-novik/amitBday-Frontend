import axios from 'axios'
import {BASE_URL} from "./config";

export const Client = axios.create(
    {
        baseURL: BASE_URL,
        headers: {'Content-Type': 'application/json'}
    }
)

export const request = ({...options}) => {
    const localStorageToken = window.localStorage.getItem('token') || null
    if (localStorageToken){
        Client.defaults.headers.common.Authorization = `token ${localStorageToken}`
    }
    const onSuccess = response => {
        return response
    }
    const onError = error => {
        return error
    }

    return Client(options).then(onSuccess).catch(onError)
}
