function App() {

  return (
    <>
      <form className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default App
