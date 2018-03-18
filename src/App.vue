<template>
  <div id="app">
    <router-view></router-view> 
    <!-- 这里棉都是显示路由 -->
      <div style="float:right;">
      </div>
  <!-- <input type="text" v-model="myValue"> -->
  <!-- {{myValueWithoutNum}} -->
   <!-- <component-a number=5 @my-event="getEvent">
     <p slot="header">like you </p>
   </component-a> -->
  <router-link :to="{path:'/apple'}">to apple</router-link>
  <router-link :to="{path:'/banana'}">to banana</router-link>
  <router-link :to="{name:'applered'}">to apple red</router-link>
  </div>
</template>

<script>
// 引入  a
import componentA from './components/Acomponent'


export default {
//   watch:{
//     myValue:function(val,oldValue){
//       console.log(val)
//     }
//   },
//   computed:{
//     myValueWithoutNum(){
//   return this.myValue.replace(/\d/g,'')
// }
//   },
//   // 计算属性
//   components: {
//     componentA
//   },

//   data () {
//     return {
//       msg:"this is message",
//       myValue:''
//     }
   
//   },
//    methods: {
//       getEvent(param){
//         alert('i`am app.vue' + param)
//       }
//     }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
*{
  padding: 0;
  margin: 0;
  outline: 0;
}
</style>
