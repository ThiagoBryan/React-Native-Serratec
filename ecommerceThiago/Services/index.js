import axios from "axios";

export const api = axios.create({
    baseUrl: 'https://reactnative.herokuapp.com/reactnative'
});