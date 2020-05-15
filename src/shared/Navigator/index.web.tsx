import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'

const Navigator: React.FC = () => (
    <BrowserRouter>
        <Switch>
            {routes.map((route, index) => (
                <Route key={index} {...route} />
            ))}
        </Switch>
    </BrowserRouter>
)

export default Navigator
