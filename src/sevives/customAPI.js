import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const customAPI = () => axios.create({
    baseURL: ' http://127.0.0.1:8181/',
    headers: {
        Authorization: user ? `Bearer ${user.token}`: ''
    }
})
export default customAPI;