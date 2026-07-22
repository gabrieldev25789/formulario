import { useState } from "react"
import "./Perfil.css"

function Perfil({ nome }) {

    const [select, setSelect] = useState(null)

    const artistas = [
        {nome: "Eminem"},
        {nome: "Drake"},
        {nome: "Kendrick Lamar"},
        {nome: "J. Cole"},
        {nome: "Travis Scott"},
        {nome: "Kanye West"}
    ]

    function selectArtist(nome){
        setSelect(nome)
    }

  return (
    <>
        <div className="bemvindo">
            <h2>Olá {nome}</h2>
            <p>Escolha um artista:</p>

            <div className="artistas-grid">
                {artistas.map((artista, index)=>(
                    <button key={index} onClick={()=> selectArtist(artista.nome)} className={select === artista.nome ? "artista-card selecionado" : "artista-card"}>{artista.nome}</button>
                ))}
            </div>

            <p className="artista-escolhido">
                Você escolheu: <strong>||||||||||</strong>
            </p>
        </div>
    </>
  )
}

export default Perfil