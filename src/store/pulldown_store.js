export default{
	state:{
		show:false,
		lang:"CN",
		theme:'default',
		boxShow:false
	},
	getters:{
		//类似 computed用来计算state生成后新数据状态,供其他组件使用，状态使用,比如state.show关，state.getters.not_switch_menu就开,被动改，只能通过state去改变！！！！
		not_switch_menu(state){
			return !state.show
		}
	},
	mutations:{
		//mutations行为单一，点对点触发,父级中用$store.commit('switch_menu')可以触发
		switch_menu(state){
			//state对应上面的state
			state.show=false;
		}
	},
	actions:{
		//actions一对多，可以在父级中使用$store.dispatch('switch_menu')来触发以下switch_menu方法
		//switch_menu(context)去执行多条mutations中的方法
		switch_menu(context){
			//这里的context和我们使用的$store拥有相同的对象和方法
			context.commit('switch_menu')
		}
	}
}
