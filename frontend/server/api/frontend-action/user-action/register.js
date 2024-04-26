import axios from 'axios'

export default defineEventHandler( async (event) => {
    const { username, password } = await readBody(event)

    const result = axios.post('http://localhost:3030/api/register', {
        username: username,
        password: password
    })
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.error(error)
        })

    return result
})