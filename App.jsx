import { useState } from "react"
import Form from "./Components/Form/Form.jsx"
import Perfil from "./Components/Perfil/Perfil.jsx"

function App() {

  const [exibir, setExibir] = useState(false)
  const [nomeSalvo, setNomeSalvo] = useState("")

  return (
    <>
      <Form 
        nome={nomeSalvo}
        onEnviar={setNomeSalvo}
        setExibir={setExibir}
      />

      {exibir && <Perfil 
        nome={nomeSalvo} 
      />}
    </>
  )
}

export default App
