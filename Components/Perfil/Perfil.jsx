import "./Perfil.css"

function Perfil({ nome }) {

  return (
    <>
        <div class="bemvindo">
            <h2>Olá {nome}</h2>
            <p>Escolha um artista:</p>

            <div class="artistas-grid">
                <button class="artista-card">Eminem</button>
                <button class="artista-card">Drake</button>
                <button class="artista-card">Kendrick Lamar</button>
                <button class="artista-card">J. Cole</button>
                <button class="artista-card selecionado">Travis Scott</button>
                <button class="artista-card">Kanye West</button>
            </div>

            <p class="artista-escolhido">
                Você escolheu: <strong>Travis Scott</strong>
            </p>
        </div>
    </>
  )
}

export default Perfil