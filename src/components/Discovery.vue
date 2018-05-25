<template>
	<div class="discovery">
		<commonheader :path="'/'" :title="'发现'" :centershow="false"></commonheader>
		<div @click="$store.commit('switch_menu')">
			<div class="dash-grid grid-5 control-header">
			<div class="item" v-for="item in disItem" >
				<router-link :to="item.path" class="item" @click="changeContent">
					<img :src="item.imgNor">
					<img :src="item.imgAct">
					<p>{{item.title}}</p>
					<i class="triangle-up"></i>
					<div style="height: 10px;"></div>
				</router-link>
			</div>
		</div>
		<div class="discovery-content">
			<router-view></router-view>
		</div>
		</div>
	</div>
</template>

<script>
	import CommonHeader from './CommonHeader.vue'
	export default {
		name: 'discovery',
		data() {
			return {
				windowScrollTop: '',
				disItem: [{
					path: '/goodchoice',
					title: '精选',
					imgNor: require('../img/dis-item0.png'),
					imgAct: require('../img/dis-item0-a.png')
				}, {
					path: '/goodeat',
					title: '好吃的',
					imgNor: require('../img/dis-item1.png'),
					imgAct: require('../img/dis-item1-a.png')
				}, {
					path: '/goodplay',
					title: '好玩的',
					imgNor: require('../img/dis-item2.png'),
					imgAct: require('../img/dis-item2-a.png')
				}, {
					path: '/goodtosee',
					title: '好看的',
					imgNor: require('../img/dis-item3.png'),
					imgAct: require('../img/dis-item3-a.png')
				}, {
					path: '/goodshoppingenc',
					title: '购物百科',
					imgNor: require('../img/dis-item3.png'),
					imgAct: require('../img/dis-item3-a.png')
				}]
			}
		},
		components: {
			commonheader: CommonHeader
		},
		methods: {
			changeContent() {
//				var linearScroll = function(index, height, scrollT) {
//					if(document.getElementsByTagName('html')[0]) {
//						var box = document.getElementsByTagName('html')[0]
//						var scrollT = scrollT
//						var scrollMax = index * height
//						var offset = scrollMax - scrollT
//						var sec = 50
//						//计算50次后清除定时器
//						var sec_count = 50
//						var oneOffset = offset / sec
//						var _timer = setInterval(function() {
//							box.scrollTo(0, scrollT + oneOffset)
//							scrollT += oneOffset
//							sec_count--
//							if(!sec_count) {
//								clearInterval(_timer)
//								sec_count = 50
//							}
//							//400是毫秒数
//						}, 200 / sec)
//
//					}
//				}
				var header = document.getElementsByClassName('control-header')[0]
				var oHtml=document.getElementsByTagName('html')[0]
				header.classList = "dash-grid grid-5 control-header"
				oHtml.scrollTo(0,0)
				//var htmlScrollTop = document.getElementsByTagName('html')[0].scrollTop
				//linearScroll(0, 45, htmlScrollTop)
				
			},
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				if(document.getElementsByClassName('control-header')[0]) {
					var header = document.getElementsByClassName('control-header')[0]
					setTimeout(function(){
						this.windowScrollTop =scrollTop
					},10)		
					if(scrollTop >= 45) {
						header.classList = "dash-grid grid-5 control-header control-header-fixed"
					} else {
						header.classList = "dash-grid grid-5 control-header"
					}
				}
			}
		},
		mounted() {			
			window.addEventListener('scroll', this.handleScroll)			
			this.changeContent()
		},
		watch: {
			windowScrollTop() {
				document.getElementsByTagName('body')[0].scrollTop = 0;
			}
		}
	}
</script>

<style scoped>
	.discovery {
		margin-top: 44px;
		background:#F7F7F7 ;
		min-height: 100%;
	}
	
	.control-header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
	}
	
	.discovery .item {
		font-size: 13px;
		padding: 0;
		color: #6E6E6E
	}
	
	.discovery .item img:nth-of-type(2) {
		display: none;
	}
	
	.discovery .item .router-link-active img:nth-of-type(1) {
		display: none;
	}
	
	.discovery .item .router-link-active img:nth-of-type(2) {
		display: inline-block;
	}
	
	.discovery .item .router-link-active {
		color: #FFFFFF;
		background: -webkit-linear-gradient(left, #e93b3d, #ff9574)
	}
	
	.discovery .item a {
		width: 80%;
		height: 80%;
		display: block;
		padding: 10%;
		position: relative;
		text-decoration: none;
	}
	
	.triangle-up {
		position: absolute;
		bottom: 0;
		right: 40%;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 8px solid #FFFFFF;
	}
	
	.discovery .item img {
		width: 20px;
		height: 20px;
	}
</style>