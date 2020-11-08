import axios from 'axios'

export default axios.create({
    baseURL:  'https://react-quiz-1bc6e.firebaseio.com/'
})