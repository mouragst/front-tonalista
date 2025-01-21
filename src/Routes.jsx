import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Paginas referente a landing page
import Inicio from './pages/LadingPage/Inicio';
import Sobre from './pages/LadingPage/Sobre';
import Planos from './pages/LadingPage/Planos';
import Contato from './pages/LadingPage/Contato';

// Paginas referente ao login
import Login from './pages/Login/Login';
import Cadastro from './pages/Login/Cadastro';
import EsqueceuSenha from './pages/Login/EsqueceuSenha';

// Paginas referente ao sistema (usuário já logado)
import Eventos from './pages/Menu/Eventos';
import Perfil from './pages/Menu/Perfil';
import CadastroFornecedor from './pages/Cadastro/CadastroFornecedor';
import CadastroFuncionario from './pages/Cadastro/CadastroFuncionario';
import CadastroUsuario from './pages/Cadastro/CadastroUsuario';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Rotas de Landing Page */}
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre-nos' element={<Sobre />} />
                <Route path='/planos' element={<Planos />} />
                <Route path='/contato' element={<Contato />} />

                {/* Rotas de Login */}
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/esqueceu-senha' element={<EsqueceuSenha />} />

                {/* Rotas dentro do sistema (já logado) */}
                <Route path='/eventos' element={<Eventos />} />
                <Route path='/perfil' element={<Perfil />} />
                
                <Route path='/cadastro/fornecedor' element={<CadastroFornecedor />} />
                <Route path='/cadastro/funcionario' element={<CadastroFuncionario />} />
                <Route path='/cadastro/usuario' element={<CadastroUsuario />} />

            </Routes>
        </Router>
    )
}

export default AppRoutes;