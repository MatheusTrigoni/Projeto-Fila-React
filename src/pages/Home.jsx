import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/Home.css'
import user from '../assets/user.png'

export function Home() {
    return (
        <section className="home">
            <header>
                <h1>Bem-Vindo ao manipulador de filas, clique no botão abaixo para ir à tela de Login</h1>
            </header>
            <div>
                <Link to="/login">
                    <button type="button">
                        <img src={user} alt="USUÁRIOA" />
                    </button>
                </Link>
            </div>
        </section>
    )
}