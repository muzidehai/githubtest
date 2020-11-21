import Vue from 'vue'
import VueRouter from 'vue-router';
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import home from '../components/home'
// import about from '../components/about'
// import user from '../components/user'
const home = () => import('../components/home');
const homenews = () => import('../components/homenews');
const hommesage = () => import('../components/hommesage');
const about = () => import('../components/about');
const user = () => import('../components/user');
const profile = () => import('../components/profile');
Vue.use(Router)

const router = new Router({
  //在里面配置映射关系
  routes: [
    {
      //路由的默认路径
      path: '/',
      //重定向（重新定义一个方向）
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/',
          redirect: 'news'
        },
        {
          path: 'news',
          component: homenews
        },
        {
          path: 'messaeg',
          component: hommesage
        }
      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于'
      },
      beforeEnter:((to,from,next) => {
        console.log('_____________')
        next();
      })
    },
    {
      path: '/user/:userid',
      component: user,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/profile',
      component: profile,
      meta: {
         title: '档案'
      },
    }
  ],
  //吧默认的hash模式改成history（也就是去掉路径里面的#号）
  mode: 'history',
  //修改class属性（active-class）
  linkActiveClass: 'muzidehai'
})
export default router;
//前置守卫(跳转之前调用的)
router.beforeEach((to, from, next) => {
  //next必须调用不调用的话会导致导入的主键显示不出来
  //从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('aaaa');
  next();
})
//后置的钩子(跳转完之后调用)
router.afterEach((to,from) => {
  console.log('bbbb')
})
