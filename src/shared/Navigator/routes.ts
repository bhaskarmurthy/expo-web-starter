import { RouteProps } from 'react-router'
import { Home, Welcome } from '../../screens'

const routes: RouteProps[] = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/',
        component: Welcome,
    },
]

export default routes
