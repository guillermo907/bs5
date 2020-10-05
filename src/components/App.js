import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import main from '../style/css/main.css';

const App = () => {

    return (
        <div className="container-fluid p-0">
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/bs5" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>    
                </div>
            </Router>
        </div>
    );
}

export default App;