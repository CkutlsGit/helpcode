import axios from 'axios'

export default defineEventHandler( async (event) => {
    const { username, password } = await readBody(event)
    let responseRequest = 'undefined'

    const result = await axios.post('http://localhost:3030/api/register', {
        username: username,
        password: password
    })
        .then(response => {
            responseRequest = response.data
        })
        .catch(error => {
            responseRequest = error.response.data
        })

    return responseRequest
})