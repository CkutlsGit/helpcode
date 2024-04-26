import sqlite3 from 'sqlite3'

const sql = sqlite3.verbose()

export class UserDB {
    createTable(db) {
        db.run(`
        CREATE TABLE IF NOT EXISTS users (
            username TEXT,
            password TEXT
        )
        `)
    }
}