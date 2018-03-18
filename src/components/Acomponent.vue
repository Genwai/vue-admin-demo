<template>
  <div id="mes">
    <h1>{{ msg }}</h1>
  number{{number}}
  <button @click="emitMyEvent">emitMyEvent</button>
  <slot name="header"></slot>
    <!-- <a :i="classA">to baidu</a> -->
    <!-- <span v-if="Isshow">to baidu</span>
    <span v-else>to 360</span>
    <button v-on="toggle">toggle</button>
    <input type="text" v-model="inputValue" >
    {{inputValue}} -->
    <!-- <select  v-model="selectValue">
        <option v-for="item in selectValue" :value="item.value"> {{item.text}}</option>
    </select>
    <ul>
        <li v-for="item in selectValue">{{item.text}}</li>
    </ul> -->
    <transition name="fade">
      <p v-show="show">i`am show</p>
    </transition>
  <button @click="show =!show">change</button>
    
  </div>
</template>

<script>
// 这个作用就是到处，所以别的外面可以引入
export default {
  props: ['number'],
  name: 'Acomponent',
  data () {
    return {
      show:true,
      msg: 'I`am a component',
        classA:'test',
        Isshow:true,
        inputValue:'',
        selectValue:[
            {
                value:0,
                text:'apple'
            }, {
                value:1,
                text:'banana'
            }
        ]
    }
  },
  methods:{
        toggle(){
            this.Isshow = false
        },
        emitMyEvent(){
          this.$emit('my-event',this.classA)
        }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .fade-enter-active,.fade-leave-active {
    transition: all .5s ease-in;
  }
  .fade-enter,.fade-leave {
    opacity: 0;
  }
</style>
