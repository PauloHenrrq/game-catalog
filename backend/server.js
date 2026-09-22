import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const PORT = 3000

const app = express()
app.use(express.json())
app.use(cors())

const conexao = mysql.createPool({
    // estruturar a conexão com o BD
})

app.get("/", (req, res) => {

})

app.get("/:id", (req, res) => {
    
})

app.listen(PORT, () => {

})