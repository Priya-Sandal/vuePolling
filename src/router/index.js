import { createRouter, createWebHistory } from 'vue-router'
const HomePage =() => import('../components/HomePage.vue');
const SignupPage = () => import('../components/SignupPage.vue');
const LoginPage =() => import('../components/LoginPage.vue');
const routes = [

  {
    name: 'SignupPage',
    path: '/signup',
    component: SignupPage
  },

  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
  },

  {
    name: ' HomePage',
    path: '/',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
