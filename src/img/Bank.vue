<template>
	<div class="bank">
		<h3>银行家+</h3>
		<div>
			<search></search>
		</div>
		<van-swipe :autoplay="3000">
			<van-swipe-item>
				<img src="../img/l1.jpg">
			</van-swipe-item>
			<van-swipe-item>
				<img src="../img/l2.jpg">
			</van-swipe-item>
			<van-swipe-item>
				<img src="../img/l3.jpg">
			</van-swipe-item>
			<van-swipe-item>
				<img src="../img/l4.jpg">
			</van-swipe-item>
		</van-swipe>
		<div class="goodslistbox">
			<p>精选产品<a>更多...</a></p>
			<goodslist></goodslist>
		</div>
		<div>
			<slider></slider>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import { Swipe, SwipeItem } from 'vant';
	import GoodsList from './GoodsList.vue';
	//导入轮播图组件
	import Slider from './Slider';
	//导入header的搜索组件
	import Search from './Search.vue'
	
	Vue.use(Swipe).use(SwipeItem)
	export default {
		data() {
			return {
				msg: '我是银行页'
			}
		},
		components:{
			goodslist:GoodsList,
			slider:Slider,
			search:Search
		}
	}
</script>

<style scoped>
	h3 {
		background: #FFFFFF;
		text-align: center;
		font-size: 18px;
		padding:6px 0;
		margin: 0;
	}
	.van-swipe__track img{
		width: 100%;
		height: auto;
	}
	.goodslistbox>p{
		margin:10px 12px;
	}
	.goodslistbox a{
		float: right;		
	}
</style>