import { Link } from 'react-router-dom'
import mais from '../images/mais.png'
import menos from '../images/menos.png'
import '../styles/FormularioAdm.css'

export function FormularioAdm() {
    return (
        <section className="formulario-adm">
            <form action="">
                <div>
                    <label htmlFor="adicionar">Quem será adicionado na fila?</label>
                </div>

                <div>
                    <input type="text" id="adicionar" placeholder="Digite aqui..." />
                    <button type="submit" className="adicionar-remover">
                        <img src={mais} alt="botão de adicionar" />
                    </button>
                </div>
            </form>
                
            <form action="">
                <div>
                    <label htmlFor="remover">Quem será removido na fila?</label>
                </div>

                <div>
                    <input type="text" id="remover" placeholder="Digite aqui..." />
                    <button type="submit" className="adicionar-remover">
                        <img src={menos} alt="botão de remover" />
                    </button>
                </div>
            </form>

            <Link to="/fila">
                <button type="button">Fila</button>
            </Link>
        </section>
    )
}