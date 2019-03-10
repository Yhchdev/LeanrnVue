<!--1.模板:html结构-->
<template>
    <div id="home">
        <app-header v-on:titleChanged="updataTitle($event)" v-bind:title="title"></app-header>
        <users v-bind:users="users"></users>
        <users v-bind:users="users"></users>
        <app-footer v-bind:title="title"></app-footer>

    </div>
</template>


<!--2.行为:处理逻辑-->
<script>
    //局部注册组件
    import Users from './Users'
    import Header from './Header'
    import Footer from './Footer'

    export default {
        name: 'home',
        data(){
            return{
                users: [],
                title:"传递的是一个值,(number string boolean)"

            }
        },
        methods:{
            updataTitle(title) {
                this.title = title;
            }
        },
        components:{
            "users":Users,
            "app-header":Header,
            "app-footer":Footer,
        },
        created() {
            this.$http.get("https://jsonplaceholder.typicode.com/users")
                .then((data) =>{
                    //箭头函数
                    //console.log(data)
                    this.users = data.body;
                })
        }

    }
</script>

<!--3.样式-->
<style>
    h1{
        color: purple;
    }

</style>
