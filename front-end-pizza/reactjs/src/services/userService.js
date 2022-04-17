import axios from '../axios'

const handleLoginApi = (username, password) => {
    return axios.post('api/Authentication/login', { username, password });
}

export { handleLoginApi };