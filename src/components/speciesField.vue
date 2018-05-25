<template>
	<div class="speciesField">
		<div class="dash-grid grid-4 dash-grid-mt">
			<div class="item item-sm-padding" v-for="item in speciesLists">
					<div>						
						<strong>
						<!--
							<strong style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210)); background-clip: text; -webkit-text-fill-color: transparent;">
						-->	
							{{item.title}}
						</strong>
						<img :src="item.imgUrl">
					</div>
					<p>{{item.tips}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'speciesField',
		data() {
			return {
				speciesLists: [{
					title: '白条商城',
					tips: '打白条换新机',
					imgUrl: require('../img/species0.jpg'),
					clkUrl: ''
				}, {
					title: '品牌秒杀',
					tips: '低价抢大牌',
					imgUrl: require('../img/species1.jpg'),
					clkUrl: ''
				}, {
					title: '闪购',
					tips: '低至9.9元',
					imgUrl: require('../img/species2.jpg'),
					clkUrl: ''
				}, {
					title: '拍拍二手',
					tips: 'iPhone 5折起',
					imgUrl: require('../img/species3.jpg'),
					clkUrl: ''
				}, {
					title: '排行榜',
					tips: '专属购物指南',
					imgUrl: require('../img/species4.jpg'),
					clkUrl: ''
				}, {
					title: '发现好货',
					tips: '发现品质生活',
					imgUrl: require('../img/species5.jpg'),
					clkUrl: ''
				}, {
					title: '会买专辑',
					tips: '教你买买买',
					imgUrl: require('../img/species6.jpg'),
					clkUrl: ''
				}, {
					title: '新品首发',
					tips: '新年旗舰机型',
					imgUrl: require('../img/species7.jpg'),
					clkUrl: ''
				}]
			}
		}
	}
</script>

<style scoped>
	.item-sm-padding {
		padding: 6px;
	}
	.item-sm-padding img{
		width:  100%;
	}
	.item-sm-padding strong{
		font-size: 15px;
		padding-bottom: 4px;
		display: inline-block;
	}
	.item-sm-padding>p{
		font-size: 12px;
	}
	.dash-grid-mt{
		margin-top: 10px;
	}
</style>