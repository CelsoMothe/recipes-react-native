import axios from 'axios'

const api = axios.create({
    baseURL: "http://192.168.18.57:3000"
})

export default api;


// Para iniciar o servidor, execute no CMD local json-server –-watch -d 180 –-host SEU-IP db.json