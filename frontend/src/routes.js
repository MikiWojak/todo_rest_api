import App from './App'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const routes = [
    {
        path: '/',
        name: 'todo',
        component: App 
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
];

export default routes;