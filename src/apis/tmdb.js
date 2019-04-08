import axios from 'axios'

/**
 * https://developers.themoviedb.org/3
 */
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '3a87326faf5bfe18650b116224c79235'
    },
})