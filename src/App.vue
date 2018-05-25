<template>
	<div id="app" v-cloak>
		<transition :name="transitionName">
			<router-view/>
		</transition>
		<!--按钮返回顶部按钮start!-->					
		<gotop></gotop>
		<!--按钮返回顶部按钮end!-->
	</div>
</template>

<script>
	//import styleCss from '../src/css/pink.css'
	import GoTop from './components/GoTop.vue'
	export default {
		name: 'App',
		data() {
			return {
				transitionName: 'slide-left',
				showBox: false
			}
		},
		watch: {
			'$route' (to, from) {
　　　　　　　　　 document.body.scrollTop = 0;
                 document.documentElement.scrollTop = 0; 
			},
			'$store.state.pulldownmenu.theme': {
				handler(val) {
						if(val=='pink'){
							this.changeTheme('static/pink.css')
						}else{
							this.changeTheme('static/default.css')
						}
				},
				deep: true
			}
		},
		methods: {
			changeTheme(theme) {
				var styleCss = document.getElementById('style')
				styleCss.href = theme			
			}
		},
		mounted() {
			if(window.localStorage.getItem('theme')==null){
				this.changeTheme('static/default.css')
			}
			if(window.localStorage.getItem('theme')){
				var theme=window.localStorage.getItem('theme')
				this.changeTheme(theme)
			}
		},
		components:{
			gotop:GoTop
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	
	[v-cloak] {
		display: none;
	}
	
	.child-view {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		transition: all .5s cubic-bezier(.55, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(30px, 0);
		transform: translate(30px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-30px, 0);
		transform: translate(-30px, 0);
	}
</style>