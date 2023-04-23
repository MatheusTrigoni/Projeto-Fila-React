import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Login } from './pages/Login'
import { Home }  from './pages/Home'
import { Cadastro } from './pages/Cadastro'
function App() {
    return (   
       <Router>
            <Routes>
                 <Route exact path="/" Component={Home} />
                <Route path="/login" Component={Login} />  
                <Route path="/Cadastro" Component={Cadastro} />         
            </Routes>
        </Router>      
    )
}


export default App