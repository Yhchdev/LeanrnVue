<!--1.模板:html结构-->
<template>
  <div id="app">
    <ul>
      <!--重新请求,全页面刷新-->
      <!--<li ><a href="/">Home</a></li>-->
      <!--<li ><a href="/helloword">HelloWord</a></li>      -->
      <li ><router-link to="/">Home</router-link></li>
      <li ><router-link to="/helloword">HelloWord</router-link></li>
    </ul>
    <!--<app-header v-on:titleChanged="updataTitle($event)" v-bind:title="title"></app-header>-->
    <!--<users v-bind:users="users"></users>-->
    <!--<users v-bind:users="users"></users>-->
    <!--<app-footer v-bind:title="title"></app-footer>-->
  <router-view></router-view>
  </div>
</template>


<!--2.行为:处理逻辑-->
<script>
  //局部注册组件


export default {
  name: 'app',
  data(){
    return{
    }
  },
  methods:{

  },
  components:{
  }

}
</script>

<!--3.样式-->
<style>
  h1{
    color: purple;
  }

</style>
