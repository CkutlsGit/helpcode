import express from 'express'
import bodyParser from 'body-parser'
import { db } from './db/index.js'
import { UserDB } from "./db/dbTypes/user.js"
import { ForumDB } from "./db/dbTypes/forum.js"

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
                console.log('Таблица пользователей существует')
                res.send('Таблица пользователей существует')
            }
            else {
                console.log('Таблицы пользователей не существует')
                res.send('Таблицы пользователей не существует')
            }
        }
    })
})

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        console.log('Ошибка в логине или с паролем')
        return res.status(406).json({ error: 'Ошибка в логине или с паролем' })
    }
    if (password.length < 6) {
        console.log('Пароль должен быть больше 6 символов')
        return res.status(406).json({ error: 'Пароль должен быть больше 6 символов' })
    }

    db.db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error('Ошибка при проверке уникальности логина.', err.message)
            return res.status(500).json({ error: 'Ошибка при проверке уникальности логина.' })
        }
        if (row) {
            console.log('Логин должен быть уникальным! Текущий логин занят.')
            return res.status(409).json({ error: 'Логин должен быть уникальным! Текущий логин занят.' })
        }

        db.db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
            if (err) {
                console.error('Ошибка при регистрации пользователя', err.message)
                return res.status(500).json({ error: 'Ошибка при регистрации пользователя' })
            }
            console.log('Пользователь успешно зарегистрирован.')
            res.status(201).json({ message: 'Пользователь успешно зарегистрирован.' })
        })
    })
})

app.post('/api/auth', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        console.log('Ошибка в логине или с паролем')
        return res.status(406).json({ error: 'Ошибка в логине или с паролем' })
    }

    db.db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error('Ошибка при проверке пользователя.', err.message)
            return res.status(500).json({ error: 'Ошибка при проверке пользователя.' })
        }
        if (!row) {
            console.log('Пользователь не найден.')
            return res.status(404).json({ error: 'Пользователь не найден.' })
        }

        if (row.password !== password) {
            console.log('Неверный пароль.')
            return res.status(401).json({ error: 'Неверный пароль.' })
        }

        console.log('Авторизация успешна.')
        res.status(200).json({ message: 'Авторизация успешна.' })
    })
})

app.post('/api/forum/create-topic', (req, res) => {
    const { author, title, description, date } = req.body

    if (!author || !title || !description || !date) {
        console.log('Ошибка с получением данных форум-топика')
        return res.status(406).json({ error: 'Ошибка при получении данных.' })
    }

    db.db.get('SELECT username FROM users WHERE username = ?', [author], (err, row) => {
        if (err) {
            console.error('Ошибка при проверке наличии юзера.')
            return res.status(500).json({ error: 'Ошибка при проверке юзера в Базе Данных.' })
        }
        if (row) {
            db.db.run('INSERT INTO forums (author, title, description, date) VALUES (?, ?, ?, ?)', [author, title, description, date], (err) => {
                if (err) {
                    console.error('Ошибка при создании форум-топика.')
                    return res.status(500).json({ error: 'Ошибка при создании форум-топика.' })
                }
                console.log('Успешное создание форум-топика.')
                res.status(201).json({ message: 'Форум-топик успешно создан!' })
            })
        }
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})