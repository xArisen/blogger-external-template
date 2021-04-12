import axios from "axios";

const instance = axios.create({
    baseURL: "https://www.googleapis.com/blogger/v3/blogs/6966531568013736286"
})

export default instance;