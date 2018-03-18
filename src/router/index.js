import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/leftSlide/HelloWorld'
import a from '@/components/Acomponent'
import Apple from '@/components/apple'
import AppleRed from '@/components/applered'
import Banana from '@/components/banana'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/',
        redirect:'/apple'
      },
    {
      path: '/',
      name: 'a',
      component: a
    },
    {
      path:'/apple',
      component:Apple,
      children:[
        {
          path:'applered',
          name:'applered',
          component:AppleRed
        }
      ]

    },{
      path:'/banana',
      component:Banana
    }
  ]
})
