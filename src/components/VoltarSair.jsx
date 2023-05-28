import { Link } from 'react-router-dom';
import voltar from '../images/voltar.png'
import logout from '../images/logout.png'
import '../styles/VoltarSair.css'

// Um botão de voltar ou sair presente na maioria das páginas
export function VoltarSair({ tipo }) {
    return (
        <div className="voltar-sair">
            <Link to="/">
                <button type="button">
                    <img src={tipo == "voltar" ? voltar : logout} alt={`botão de ${tipo}`} className={tipo == "voltar" ? "voltar" : "sair"} />
                </button>
            </Link>
        </div>
    )
}