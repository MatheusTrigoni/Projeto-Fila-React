import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" Component={Home}/>
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
    )
}

export default App