import { Link } from 'react-router-dom'
import '../styles/FormularioCadastroLogin.css'

// Um formulário presente em ambas as telas de Login e Cadastro
export function FormularioCadastroLogin({ texto }) {
    return (
        <section className="formulario-cadastro-login">
            <form action="">
                <div className="label-email-senha">
                    <label htmlFor="email">Email</label>
                </div>
                <div>
                    <input type="text" id="email" placeholder="Digite aqui..." />
                </div>

                <div className="label-email-senha">
                    <label htmlFor="senha">Senha</label>
                </div>
                <div>
                    <input type="text" id="email" placeholder="Digite aqui..." />
                </div>
            </form>
            
            <Link to="/adm">
                <button type="submit">{texto}</button>
            </Link>
        </section>
    )
}