//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		health:100,
		ended:false,

	},
	methods:{
		punch:function () {
			this.health -= 10;
			if(this.health<=0){
				this.ended = true;
			}
		},

		restart:function () {
			this.health = 100;
			this.ended = false;
		}


	},
	computed:{

	}
})

/**
 * el  :element 作用的获取容器元素
 * data:数据存储
 * method:定义方法
 */
