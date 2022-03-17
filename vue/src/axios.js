import axios from "axios";
const axiosClient=axios.create({
    baseUrl:"http://localhost:8000/api"
})

export default axiosClient;