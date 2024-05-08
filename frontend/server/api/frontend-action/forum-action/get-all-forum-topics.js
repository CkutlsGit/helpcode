import axios from "axios";

export default defineEventHandler( async (event) => {
    let responseRequest = 'undefined'

    const result = await axios.get('http://localhost:3030/api/forum/get-all-forum-topics', {})
        .then(response => {
            responseRequest = response.data
        })
        .catch(error => {
            responseRequest = error.response.data
        })

    return responseRequest
})