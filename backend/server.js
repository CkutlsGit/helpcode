import express from 'express'
import bodyParser from 'body-parser';
import { db } from './db/index.js'

const app = express()
const port = 3030

app.use(bodyParser.json())

app.get('/', async (req, res) => {
    db.db.get(`SELECT * FROM sqlite_master WHERE type='table' AND name='users'`, (err, row) => {
        if (err) {
            console.error(err.message)
            res.send('Ошибка')
        }
        else {
            if (row) {
                res.send('Таблица пользователей существует')
            }
            else {
                res.send('Таблицы пользователей не существует')
            }
        }
    })
})

app.post('/api/register', async (req, res) => {

})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})