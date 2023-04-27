import axios from 'axios';
import config from './config';

export const WEATHER = axios.create({
    baseURL: config.WEATHER.URL,
    timeout: 120000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})