import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Experince from '../views/Experience.vue';
import Projects from '../views/Projects.vue';
import Skills from '../views/Skills.vue';
import Testimonials from '../views/Testimonials.vue';


const routes = [

  {
    path: '/',
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
    path: '/experience',
    name: 'Experience',
    component: Experince
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
   component: Skills
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
   component: Testimonials
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
