import express from 'express'
import { db } from '../db/index.js'
import { ForumDB } from "../db/dbTypes/forum.js"

const router = express.Router()
const forumDB = new ForumDB()

router.post('/api/forum/create-topic', (req, res) => {
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

router.post('/api/forum/get-forum-topics', (req, res) => {
    db.db.all('SELECT * FROM forums', (err, row) => {
        if (err) {
            console.error('Ошибка при получении форум-топиков.')
            return res.status(500).json({ error: 'Ошибка при получении форум-топиков.' })
        }
        console.log('Успешно переданны все топики!')
        res.status(201).json({ data: row })
    })
})

export default router