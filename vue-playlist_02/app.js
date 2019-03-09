//实例化vue对象
new Vue({
	el:"#vue-app",
	data:{
		age:"21",
		x:"0",
		y:"0",
	},
	methods:{
		add:function(inc){
			this.age += inc;
		},
		sub:function(dec){
			this.age -= dec;
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		alert:function(){
			alert("Hello word")
		},
		keyevent:function(){
			console.log("响应了键盘事件!!!!")
		}
	}
})

/**
 * el  :element 作用的获取容器元素
 * data:数据存储
 * method:定义方法
 */