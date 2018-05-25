<template>
	<transition name="fade">
	<div class="go-top" v-if="show" :style="setBg">
		<img src="../img/gotop.png" class="go-top-btn" @click="goTop">
	</div>
	</transition>
</template>
<script>
	export default{
		data(){
			return {
				show:false,
				bg:{
					_default:'background:rgba(253,34,85,.8)',
					pink:'background:rgba(235, 136, 250, 0.9)'				
				}
			}
		},
		computed:{
			setBg:function(){
				var theme=this.$store.state.pulldownmenu.theme
				return (theme=='default'?this.bg._default:this.bg.pink)
			}
		},
		methods:{
			autoShow(){
				var scrollT=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
				if(scrollT>=150){
					this.$store.state.pulldownmenu.boxShow=true
					this.show=true
				}else{
					this.show=false
					this.$store.state.pulldownmenu.boxShow=false
				}
			},
			goTop(){		
				document.documentElement.scrollTop=0
				window.pageYOffset=0
				document.body.scrollTop=0
			}
		},
		mounted(){
			window.addEventListener('scroll',this.autoShow)
		}
	}
</script>
<style lang="scss">
	.go-top{
		position: fixed;
		bottom: 5rem;
		right: 2rem;
		display: inline-block;
		width: 2rem;
		height: 2rem;
		img{
			margin:15%;
			width: 70%;
			height: 70%;
		}
	}
</style>