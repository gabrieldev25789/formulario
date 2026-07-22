import { useState } from "react"
import Form from "./Components/Form/Form.jsx"
import Perfil from "./Components/Perfil/Perfil.jsx"

function App() {
  const [nome, setNome] = useState("")

  return (
    <>
      <Form 
        nome={nome}
        setNome={setNome}
      />

      <Perfil 
        nome={nome}
      />
    </>
  )
}

export default App
