import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateNew from './pages/CreateNew';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/create' component={CreateNew} />
                    <Route path='/completed' component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;