import sqlite3 from 'sqlite3'
import { UserDB } from './dbTypes/user.js'
import { ForumDB } from './dbTypes/forum.js'

const sql = sqlite3.verbose()

class AppDataBase {
    constructor(dbFilePath) {
        this.db = new sql.Database(dbFilePath, (err) => {
            if (err) {
                return 'Ошибка при создании DB-файла' + err
            }
            console.log('Успешное подключение')
            this.createTables()
        })
    }

    createTables() {
        const userDB = new UserDB()
        const forumDB = new ForumDB()

        userDB.createTable(this.db)
        forumDB.createTable(this.db)
    }
}

export const db = new AppDataBase('main.db')