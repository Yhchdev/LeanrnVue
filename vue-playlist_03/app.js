//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		changeColor:false,
		changeLength:false,
		/*
		a:0,
		b:0,
		age:"21",*/
	},
	methods:{
		/*
		AddtoA:function () {
			console.log("AddtoA");
			return this.age+this.a;
		},
		AddtoB:function () {
			console.log("AddtoB");
			return this.age+this.b;
		}*/

	},
	computed:{
		AddtoA:function () {
			console.log("AddtoA");
			return this.age+this.a;
		},
		AddtoB:function () {
			console.log("AddtoB");
			return this.age+this.b;
		}
	}
})

/**
 * el  :element 作用的获取容器元素
 * data:数据存储
 * method:定义方法
 */
