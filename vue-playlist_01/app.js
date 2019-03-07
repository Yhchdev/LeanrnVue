//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		name:"Yhchdev",
		job:"web开发",
		website:"https://yhch.xyz",
		websiteLink:"<a href='https://yhch.xyz'>wordpressWeb</a>",
	},
	methods:{
		greet:function(person){
			return person+","+this.name+"  修bug又快又准"
		}
	}
});

/**
 * el  :element 作用的获取容器元素
 * data:数据存储
 * method:定义方法
 */