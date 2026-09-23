import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

const conexao = mysql.createPool({
    host: "gamecat-db",
    user: "adm",
    password: "12345",
    database: "gamescat"
})

app.get("/games", async (req, res) => {
    const [games] = await conexao.query("SELECT * FROM produto")
    res.json(games)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})