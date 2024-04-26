import sqlite3 from 'sqlite3'

const sql = sqlite3.verbose()

export class ForumDB {
    createTable(db) {
        db.run(`
        CREATE TABLE IF NOT EXISTS forums (
            author TEXT,
            title TEXT,
            description TEXT,
            date TEXT
        )
        `)
    }
}