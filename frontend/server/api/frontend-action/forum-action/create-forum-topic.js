import axios from "axios";

export default defineEventHandler( async (event) => {
    const { author, title, description, date } = await readBody(event)
    let responseRequest = 'undefined'

    const result = await axios.post('http://localhost:3030/api/forum/create-topic', {
        author: author,
        title: title,
        description: description,
        date: date
    })
        .then(response => {
            responseRequest = response.data
        })
        .catch(error => {
            responseRequest = error.response.data
        })

    return responseRequest
})