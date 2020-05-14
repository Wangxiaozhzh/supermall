import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/category.vue')
const Cart = ()=>import('../views/cart/cart.vue')
const Profile = ()=>import('../views/profile/profile.vue')


//1.安装插件

Vue.use(VueRouter);

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    }
]

// 2.创建router
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router