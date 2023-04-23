import { BrowserRouter as Router, Link} from 'react-router-dom'
import App from '../App'
import '../styles/Login.css'

export function Home() {
    return( 
    <><h1 className='Titulo'>Home</h1>
        <Link to="/login">  
            <button >Navegar para a página de login</button>
        </Link>  
    </>
        )
    }
