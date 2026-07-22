import { useState } from "react"
import "./Perfil.css"

function Perfil({ nome }) {

    const [select, setSelect] = useState(null)

        const artistas = [
            { nome: "A$AP Rocky", album: ["Live.Love.A$AP", "Long.Live.A$AP", "Testing"] },
            { nome: "Drake", album: ["Views", "Scorpion", "Take Care"] },
            { nome: "Kendrick Lamar", album: ["DAMN.", "good kid, m.A.A.d city", "To Pimp a Butterfly"] },
            { nome: "J. Cole", album: ["Forest Hills Drive", "KOD", "The Off-Season"] },
            { nome: "Travis Scott", album: ["Astroworld", "Rodeo", "Utopia"] },
            { nome: "Kanye West", album: ["Graduation", "My Beautiful Dark Twisted Fantasy", "Yeezus"] }
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
                select === artista.nome && <h3>Albuns: <strong>{artista.album.map((album)=>(
                    <h3>{album}</h3>
                ))}</strong></h3>
                ))}
            </div>

            {select && (
                <p className="artista-escolhido">
                    Você escolheu: <strong>{select}</strong>
                </p>
            )}
        </div>
    </>
  )
}

export default Perfil