import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Melimelo from './pages/Melimelo'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/',
            name: 'Melimelo',
            component: Melimelo,
        }

    ]
})