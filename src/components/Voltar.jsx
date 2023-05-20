import voltar from '../images/voltar.png'
import '../styles/Voltar.css'

// Um botão de voltar presente na maioria das páginas
export function Voltar() {
    return (
        <div className="voltar">
            <button>
                <img src={voltar} alt="botão de voltar" />
            </button>
        </div>
    )
}