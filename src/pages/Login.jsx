import { BrowserRouter as Router, Link} from 'react-router-dom'
import '../styles/Login.css'

export function Login() {
 return (
    <> 
        <header>
            <h1 className='Titulo'> Login </h1>
         </header>
        <form>
            <p>
            <label>Nome
               <input type="text" />
            </label>
           </p>
           <p>
            <label>E-mail
               <input type="text" />
            </label>
            </p>
            <p>
            <label>Senha
               <input type="text" />
            </label>
            </p>
            <input type="submit" />
        <Link to='/'> 
            <button>Voltar Home</button>
        </Link>
        <Link to='/Cadastro'> 
            <button>Cadastrar</button>
        </Link>
        </form>
    </>   
)
}



     

