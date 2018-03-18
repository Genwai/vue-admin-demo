<template>
  <div class="left-side">
    <div class="admin-leftslide-inner">
      <router-link to="/" class="logo black">
        <img src="../../assets/logo.png" alt="">
      </router-link>

  <el-col >
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#424f63" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
      
          <i class="icon fa fa-home"></i>
          <span slot="title">主页</span>
  
      </el-menu-item>
      <el-submenu index="2">
         <template slot="title">
        <i class="icon fa fa-table"></i>
        <span slot="title">表格管理</span>
         </template>
          <el-menu-item index="1-1">
            <span>基本表格</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <span>排序表格</span>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="3">
         <template slot="title">
        <i class="icon fa fa-bar-chart-o"></i>
        <span slot="title">
          图标管理
        </span>
         </template>
          <el-menu-item index="2-1">
            <span>柱状图标</span>
          </el-menu-item>
        
      </el-submenu>
    </el-menu>
  </el-col>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'LOGO'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >
/* 重新写css的时候需要，该组件的主css类名，作为判断 */
.logo {
  display: inline-block;
width: 100%;
  text-align: center;
}

.logo >img {
  width: 100%;
  width: 60px;
  display: inline-block;
}
.left-side {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 220px;
  height: 100%;
  overflow-y: auto;
  background-color: #424f63;


}
.left-side .el-menu ,
.left-side .el-submenu__title
{
  background: #424f63 !important;

}
.left-side .el-menu {
  border-right: 0;
}
.left-side .el-menu-item i,
.left-side .el-submenu__title i {
  font-size: 16px;
  color: #ffffff;
  /* margin-right: 10px; */
}
.left-side .el-submenu__title span,
.left-side .el-submenu .el-menu-item span,
.left-side .el-menu span{
 margin-left: 10px;
}
.left-side .menubar .menuitem:hover {
  color: #65cea7 ;
  background: #353f4f !important;
}
</style>
