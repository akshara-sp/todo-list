import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todos from './pages/Todos';
import CreateNew from './pages/CreateNew';
import LoginForm from './components/LoginForm';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={ <Todos status='created'/> } />
                    <Route path='/create' element={ <CreateNew /> } />
                    <Route path='/completed' element={ <Todos status='done'/> } />
                    <Route path='/login' element={ <LoginForm />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;