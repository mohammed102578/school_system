import Vue from 'vue/dist/vue';
import  VueRouter from 'vue-router'; 
import home from './admin/component/home.vue';



Vue.use(VueRouter);

const routes = [
//home page
   {
    path:"/",
    component : home,
    name : 'home'
    },


    
];

export default new VueRouter({

    mode:'history',
    routes,
    
})