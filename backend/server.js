import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const port = 3030

app.get('/', async (req, res) => {
    res.send('yes')
    console.log('yes')
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})