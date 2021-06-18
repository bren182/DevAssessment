import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import EmployeeDashboard from './components/EmployeeDashboard';

import './custom.css'

const App = () => {

    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/dashboard' component={EmployeeDashboard} />

        </Layout>
    );

}

export default App;