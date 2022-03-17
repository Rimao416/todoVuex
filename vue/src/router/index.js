import DefaultLayout from '../components/DefaultLayout.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Index from '../views/Index.vue'
import store from '../store'
const routes=[
    {
    path:'/',
    redirect:'index',
    name:'Index',
    component:Index,
    children:[
        {
            path:'/index',name:'Index',component:Index
        }
    ]
    }

]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;