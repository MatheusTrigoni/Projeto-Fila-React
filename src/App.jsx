import { Router, Route, Routes} from 'react-router-dom'
import { Home }  from './pages/Home'
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { Adm } from './pages/Adm'
import { Fila } from './pages/Fila'

export function App() {
    return (
       <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/adm" element={<Adm />} />
                <Route path="/fila" element={<Fila />} />
            </Routes>
        </Router>
    )
}