import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import Contact  from '@/pages/Contact.vue'
import Project from './pages/Project.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import Registration from './pages/Registration.vue'
import User from '@/pages/User.vue'
import Skill from '@/pages/Skill.vue'
import LogIn from './pages/LogIn.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about',name:'About', component: About },
    { path: '/register', name: 'Register', component: Registration },
    { path: '/users', name: 'Users', component: User },
    {path:'/skill',name:'Skill',component: Skill},
    { path: '/contact',name:'Contact', component: Contact },
    { path: '/project',name:'Project', component: Project },
    { path: '/project/:name', name: 'ProjectDetail', component: ProjectPage, props: true },
   { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
   {path:'/login',name:'login',component:LogIn},
    
]


const router = createRouter({
    linkActiveClass: 'font-bold',
    linkExactActiveClass: 'font-bold',
    history: createWebHistory(),
    routes
})
router.afterEach(async (to, from, failure) => {
    if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});
export default router;