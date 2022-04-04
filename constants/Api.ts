const BASE_URL = 'https://api.openweathermap.org/data/2.5/'
const API_KEY = "b94e53a435a10994c9f671ff48ecbc39"
export const URL = {
    selectCity:(city:string) => BASE_URL + `weather?q=${city}&units=metric&APPID=${API_KEY}`
}