import { useState } from "react"

function App() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [msg, setMsg] = useState("")

  function Form(){
    if(!nome || !email || !senha) {
      setMsg("Preencha todos os campos")
    } else{
      setMsg("")
    }
    console.log(nome, email, senha)
  }

  console.log("sadsdasda")

  return (
    <>
      <form className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>

        <input 
          type="text" 
          id="nome" 
          name="nome"
          onChange={(e)=> setNome(e.target.value)} 
          value={nome}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>

        <input 
          type="email" 
          id="email" 
          name="email" 
          onChange={(e)=> setEmail(e.target.value)} 
          value={email}/>
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>

        <input 
          type="password" 
          id="senha" 
          name="senha" 
          onChange={(e)=> setSenha(e.target.value)} 
          value={senha}/>
        </div>

        <button type="button" onClick={()=> Form()}>Enviar</button>
      </form>

      {msg && <h3>{msg}</h3>}
    </>
  )
}

export default App
