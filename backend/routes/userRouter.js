import express from 'express'
import { db } from '../db/index.js'
import { UserDB } from "../db/dbTypes/user.js"

const router = express.Router()
const userDB = new UserDB()

router.post('/api/register', async (req, res) => {
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

router.post('/api/auth', (req, res) => {
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

export default router