import { createWebHistory, createRouter } from "vue-router"
import Accueil from '../components/Accueil.vue'
import Liste from '../components/Liste.vue'
import Contact from '../components/Contact.vue'
import User from '../components/User.vue'

const routes = [{
        path: "/",
        name: "Accueil",
        component: Accueil,
    },
    {
        path: "/liste",
        name: "Liste",
        component: Liste,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: '/user/:id',
        component: User,
        name: 'user'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;