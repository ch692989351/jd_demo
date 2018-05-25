<template>
	<div class="trolley">
		<commonheader :path="'/'" :centershow="false" :title="'购物车'"></commonheader>
		<div @click="$store.commit('switch_menu')">
			<h4>
			登录后可同步账户购物车中的商品<button @click="toLoginPage">登  录</button>
		</h4>
			<div class="dash-grid grid-2">
				<div class="item">
					<div>
						<p>每日神券</p>
						<p class="light-black">限量发放快去抢</p>
					</div>
				</div>
				<div class="item">
					<div>
						<p>我的收藏</p>
						<p class="light-black">你关心的都在这里</p>
					</div>
				</div>
			</div>
			<div class="register">
				<router-link :to="'/'">
					<img src="../img/goodslist/page0_slider0.jpg">
				</router-link>
			</div>
			<div class="hr-line">
				<div>
					<span>京东秒杀</span>
				</div>
			</div>
			<seckillgoodlist :sekillgoodslist="seckilldata"></seckillgoodlist>
			<div class="hr-line">
				<div>
					<span>可能你想要</span>
				</div>
			</div>
			<div class="dash-grid grid-2 dash-grid-pros">
				<div v-for="list in resourceList" class="item">
					<pushgoods :resource="list"></pushgoods>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { seckillGoodList} from '../../static/initData.js'
	import { pushGoodsList}  from '../../static/cnInitData.js'
	import CommonHeader from '../components/CommonHeader.vue'
	import SeckillList from '../components/seckillGoodsList.vue'
	import PushGoods from '../components/PushGoods.vue'
	//import {mapState,mapMutations} from 'vuex'
	export default {
		//name:'trolley',
		data() {
			return {
				resourceList: pushGoodsList,
				seckilldata:''
			}
		},
		components: {
			commonheader: CommonHeader,
			seckillgoodlist: SeckillList,
			pushgoods: PushGoods
		},
		created(){
			this.seckilldata=seckillGoodList
		},
		methods: {
			toLoginPage() {
				this.$router.push('/login')
			}
		}
	}
</script>

<style scoped>
	.hr-line {
		text-align: center;
		position: relative;
	}
	
	.hr-line div::before {
		width: 100%;
		height: 1px;
		background: #ccc;
		position: absolute;
		top: 50%;
		left: 0;
		content: '';
	}
	
	.hr-line span {
		display: inline-block;
		padding: 0 13px;
		color: 333;
		font-size: 12px;
		position: relative;
		background: #f7f7f7;
	}
	
	.dash-grid-pros {
		grid-column-gap: 7px;
		grid-row-gap: 7px;
	}
	
	.hr-line span::before {
		width: 4px;
		height: 4px;
		background: #ccc;
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -2px;
	}
	
	.hr-line span::after {
		width: 4px;
		height: 4px;
		background: #ccc;
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		margin-top: -2px;
	}
	
	.trolley {
		margin-top: 45px;
		min-height: 100%;
		background: #F7F7F7;
	}
	
	a:hover {
		cursor: pointer;
	}
	
	.register a {
		display: block;
		cursor: pointer;
	}
	
	.register a img {
		width: 100%;
		height: auto;
	}
	
	h4 {
		font-size: 14px;
		height: 60px;
		color: #333;
		line-height: 60px;
		margin: 0;
		text-align: center;
		font-weight: normal;
		border-bottom: 1px solid #E5E5E3;
	}
	
	h4 button {
		margin-left: 10px;
		padding: 0 21px;
		height: 30px;
		color: #FFFFFF;
		border-radius: 4px;
		background: #e4393c;
		border: none;
	}
	
	.item {
		padding: 0;
		position: relative;
	}
	
	.item div {
		height: 75px;
		background: #fff url(data:image/png;base64,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) no-repeat 10px 10px;
		background-size: 75px;
		font-size: 14px;
		color: #e4393c;
		text-align: right;
	}
	
	.item:nth-of-type(2) div {
		background: #fff url(data:image/png;base64,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) no-repeat 10px 10px;
		background-size: 75px;
	}
	
	.item div p {
		padding-top: 13px;
		padding-right: 13px;
	}
	
	.item .light-black {
		padding-top: 0;
		color: #999;
	}
	
	.item:nth-of-type(1)::before {
		content: '';
		position: absolute;
		right: 0;
		width: 1px;
		height: 100%;
		background: #E5E5E3;
	}
</style>