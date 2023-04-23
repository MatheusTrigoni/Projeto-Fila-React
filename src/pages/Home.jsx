import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/Home.css'
import user from '../assets/user.png'

export function Home() {
    return (
        <section className="home">
            <div className="homescreen">
                <header>
                    <h1>Bem-Vindo ao manipulador de filas, clique no botão para ir à tela de Login</h1>
                </header>
                <Link to="/login">
                    <button type="button" className="usuario">
                        <img src={user} alt="USUÁRIOA" />
                    </button>
                </Link>
            </div>
        </section>
    )
}