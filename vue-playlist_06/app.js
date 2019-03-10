//组件
Vue.component("greeting",{
	template:'<p>{{ name }} :大家好，给大家介绍一下我的女朋友@关晓彤' +
		'<button v-on:click="changeName">改名</button>' +
		'</p>',
	data:function () {
		return{
			name:"鹿晗"
		}
	},
	methods:{
		changeName:function () {
			this.name = "LHan"
		}

	}
})

//实例化vue对象
new Vue({
	el:"#vue-app-one",
})
new Vue({
	el:"#vue-app-two",
})

/**
 * el  :element 作用的获取容器元素
 * data:数据存储
 * method:定义方法
 */
