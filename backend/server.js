import express from 'express'
import bodyParser from 'body-parser';
import { db } from './db/index.js'
import { UserDB } from "./db/dbTypes/user.js";
import { ForumDB } from "./db/dbTypes/forum.js";

const app = express()
const port = 3030

const userDB = new UserDB()
const forumDB = new ForumDB()

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
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: 'Ошибка в логине или с паролем' })
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'Пароль должен быть больше 6 символов' })
    }

    db.db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            return res.status(500).json({ error: 'Ошибка при проверке уникальности логина.' })
        }
        if (row) {
            return res.status(400).json({ error: 'Логин должен быть уникальным! Текущий логин занят.' })
        }

        db.db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
            if (err) {
                console.log(err.message)
                return res.status(500).json({ error: 'Ошибка при регистрации пользователя' })
            }
            res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' })
        })
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})