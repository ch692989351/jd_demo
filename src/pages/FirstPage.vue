<template>
	<div class="bank">
		<div>
			<search></search>
			<div class="slider-box">
				<div class="theme-box" v-if="$store.state.pulldownmenu.boxShow">				
					<img src="../img/theme-icon.png" @click="langChange">
				</div>
				<slider :sliders="sliders"></slider>
			</div>
			<div class="main">
				<a v-if="$store.state.pulldownmenu.theme=='pink'">
					<img src="../img/ad-t.gif">
				</a>
				<div class="dash-grid-wrap">
					<nav class="dash-grid grid-5">
						<div v-for="(item,index) in mainList" class="item">
							<i :class="'bgimg-' + (index+1) "></i>
							<p>{{item.title}}</p>
						</div>
					</nav>
				</div>
				<a v-if="$store.state.pulldownmenu.theme=='default'">
					<img src="../img/ad-b-default.jpg">
				</a>
			</div>
		</div>
		<div class="daily-welfare">
			<ul>
				<li>
					<a href="http://www.baidu.com">
						<img src="../img/daily_welfare.jpg">
					</a>
				</li>
			</ul>
		</div>
		<div>
			<seckillgoodslist :sekillgoodslist="seckillGoodList"></seckillgoodslist>
			<scrolltips></scrolltips>
		</div>
		<div class="goodslistbox">
			<p>精选产品
				<a>更多...</a>
			</p>
			<!--
				<goodslist></goodslist>
			-->
		</div>
		<sepeciesfield></sepeciesfield>
		<div>
			<footerNav></footerNav>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import GoodsList from '../components/GoodsList.vue';
	//导入轮播图组件
	import Slider from '../components/Slider';
	//导入header的搜索组件
	import Search from '../components/Search.vue'
	import SrcollTips from '../components/ScrollTips.vue'
	import seckillGoodsList from '../components/seckillGoodsList.vue'
	import sepeciesField from '../components/speciesField.vue'
	import Theme from '../components/Theme.vue'
	//引入底部导航
	import footerNav from '../components/footerNav.vue'

	//Vue.use(Swipe).use(SwipeItem)
	import { seckillGoodList, mainList, homePageSliders, homePageSliders_pink } from '../../static/initData.js'
	export default {
		data() {
			return {
				seckillGoodList: seckillGoodList,
				mainList: mainList,
				sliders: '',
				themeboxshow: false
			}
		},
		methods: {
			showThemeBox() {
				this.themeboxshow = !this.themeboxshow
			},
			langChange(){
				document.documentElement.scrollTop=0
				window.pageYOffset=0
				document.body.scrollTop=0
				window.location.reload()
				var theme=this.$store.state.pulldownmenu.theme
				if(theme=='pink'){
					window.localStorage.setItem('theme','static/default.css')
					this.$store.state.pulldownmenu.theme='default'				
				}else{
					window.localStorage.setItem('theme','static/pink.css')
					this.$store.state.pulldownmenu.theme='pink'					
				}
				
			},
			loadThemeResource() {
				if(window.localStorage.getItem('theme')) {
					var theme = window.localStorage.getItem('theme')
					if(theme == 'static/default.css') {
						this.$store.state.pulldownmenu.theme = 'default'
						this.sliders = homePageSliders
					} else {
						this.$store.state.pulldownmenu.theme = 'pink'
						this.sliders = homePageSliders_pink
					}
				} else {
					this.$store.state.pulldownmenu.theme = 'default'
					this.sliders = homePageSliders
				}
			} 
		},
		created() {
			this.loadThemeResource()
		},
		components: {
			goodslist: GoodsList,
			slider: Slider,
			search: Search,
			scrolltips: SrcollTips,
			seckillgoodslist: seckillGoodsList,
			sepeciesfield: sepeciesField,
			theme: Theme,
			footerNav: footerNav
		}
	}
</script>

<style scoped>
	body {
		font-size: 12px;
	}
	
	h3 {
		background: #FFFFFF;
		text-align: center;
		font-size: 18px;
		padding: 6px 0;
		margin: 0;
	}
	
	.bank {
		margin-bottom: 100px;
	}
	
	.van-swipe__track img {
		width: 100%;
		height: auto;
	}
	
	.goodslistbox>p {
		margin: 10px 12px;
	}
	
	.goodslistbox a {
		float: right;
	}
	
	.main {
		margin-top: -4px;
	}
	
	.main a,
	.main img,
	.main i {
		display: block;
		width: 100%;
	}
	
	.main img {
		height: auto;
	}
	
	.main i {
		width: 2.4rem;
		height: 2.4rem;
		margin: 0 auto;
	}
	
	.dash-grid-wrap .item {
		background-color: transparent;
		padding: 10px;
		font-size: 12px;
	}
	
	.daily-welfare a,
	.daily-welfare a img {
		display: block;
		width: 100%;
		height: auto;
	}
	
	.slider-box {
		margin-top: 30px;
		position: relative;
	}
	
	.theme-show {
		position: absolute;
		color: #FFFFFF;
		font-weight: 700;
		font-size: 1.2rem;
		z-index: 99;
		bottom: 1rem;
		right: 1rem;
	}
	
	.theme-box {
		position: fixed;
		bottom: 5rem;
		right: 5rem;
		display: inline-block;
		width: 2rem;
		height: 2rem;
		z-index: 99;
	}
	.theme-box img {
		margin: 15%;
		width: 70%;
		height: 70%;
	}
</style>