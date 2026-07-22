import { useState } from "react"
import "./Perfil.css"

function Perfil({ nome }) {

    const [select, setSelect] = useState(null)

    const artistas = [
        {nome: "A$AP Rocky", album: "Testing"},
        {nome: "Drake", album: "Views"},
        {nome: "Kendrick Lamar", album: "Damn"},
        {nome: "J. Cole", album: "Forest Hills" },
        {nome: "Travis Scott", album: "Astroworld"},
        {nome: "Kanye West", album: "Graduation"}
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
                
                {select && artistas.map((artista)=>(
                select === artista.nome && <h3>{artista.album}</h3>

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