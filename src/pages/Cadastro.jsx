import { BrowserRouter as Router, Link} from 'react-router-dom'
import '../styles/Login.css'

export function Cadastro() {
    return (
       <> 
           <header>
               <h1 className='Titulo'> Cadastrar novo usuário </h1> 
            </header>
           <form>
               <p>
               <label>Nome completo
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
           </form>
       </>   
   )
   }