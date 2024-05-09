import axios from "axios";

export default defineEventHandler( async (event) => {
    const { id } = await readBody(event)
    let responseRequest = 'undefined'

    const result = await axios.post('http://localhost:3030/api/forum/get-forum-topic-by-id', {
        id: id
    })
        .then(response => {
            responseRequest = response.data
        })
        .catch(error => {
            responseRequest = error.response.data
        })

    return responseRequest
})