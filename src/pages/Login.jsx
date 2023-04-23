import { BrowserRouter as Router, Link } from "react-router-dom"
import '../styles/Login.css'

export function Login() {
    return (
        <>
            <header>
                <h1>Tela de Login</h1>
            </header>
            <section>
                <form action="">
                    <label htmlFor="usuario">Usuário:</label>
                    <input type="text" id="usuario" name="usuario" />
                    <label htmlFor="senha">Senha:</label>
                    <input type="text" id="senha" name="senha" />
                    <button type="submit">Enviar</button>
                </form>
            </section>
            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    )
}