import React from 'react'
import { Router, Switch, Route } from './src/shared/Navigation'
import { Home, Welcome } from './src/screens'

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/">
                <Welcome />
            </Route>
        </Switch>
    </Router>
)

export default App
