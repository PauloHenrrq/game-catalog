import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
      <>
  <div className="jogos-lista">
    {jogos.map((jogo) => (
      <div className="jogo-card" key={jogo.id_jogo}>
        <h3>{jogo.nome}</h3>

        <p><strong>Gênero:</strong> {jogo.genero}</p>
        <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
        <p><strong>Estoque:</strong> {jogo.estoque}</p>
        <p><strong>Preço:</strong> R$ {Number(jogo.preco).toFixed(2)}</p>

      </div>
    ))}
  </div>
</>
  )
}

export default App
