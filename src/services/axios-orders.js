import axios from 'axios';

const instance = axios.create({
    baseURL:'https://whisper-4bb6f.firebaseio.com/'
});
export default instance;