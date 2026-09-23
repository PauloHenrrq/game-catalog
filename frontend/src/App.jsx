import { useState } from 'react'
import './App.css'

const API_URL = 'http://localhost:3000/games'

function App() {
  const [produtos, setProdutos] = useState([])
  const [erro, setErro] = useState(null)

  async function listarProdutos() {
    setErro(null)
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`Erro HTTP ${res.status}`)
      const data = await res.json()
      console.log('Produtos recebidos:', data)
      setProdutos(data)
    } catch (err) {
      console.error('Erro ao buscar produtos:', err)
      setErro(err.message)
    }
  }

  return (
    <>
      <h1>Catalogo de games</h1>

      <button onClick={listarProdutos}>Listar produtos</button>

      {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}

      <ul>
        {produtos.map((p) => (
          <li key={p.id_produto}>
            {p.nome} - R$ {p.preco}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App