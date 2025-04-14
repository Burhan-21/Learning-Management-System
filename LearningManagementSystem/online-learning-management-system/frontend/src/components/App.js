import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import UserManagement from './UserManagement';
import NotFound from './NotFound';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Online Learning Management System</h1>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users" component={UserManagement} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;