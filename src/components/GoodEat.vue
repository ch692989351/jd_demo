<template>
	<div class="goodtosee">
		<div class="dash-grid grid-4 set-margin-0">
			<div v-for="item in goodEatNavs" class="item">
				<img :src="item.img">
				<p>{{item.title}}</p>
			</div>
		</div>
		<div>
			<disinline :resource="disIList[0]"></disinline>
			<disblock :resource="disBList[0]"></disblock>
			<!--<disinline :resource="disIList[1]"></disinline>
			<disinline :resource="disIList[2]"></disinline>
			<disinline :resource="disIList[3]"></disinline>		-->
		</div>
	</div>
</template>

<script>
	import DisInline from './DisInline.vue'
	import DisBlock from './DisBlock.vue'
	import { disInlineList } from '../../static/cnInitData.js'
	import {disBlockList} from '../../static/cnInitData.js'
	export default{
		name:'goodtosee',
		data(){
			return {
				goodEatNavs:[{
					title:'休闲小吃',
					img:require('../img/dis-eat0.png')
				},{
					title:'牛奶水饮',
					img:require('../img/dis-eat1.png')
				},{
					title:'坚果蜜饯',
					img:require('../img/dis-eat2.png')
				},{
					title:'进口美食',
					img:require('../img/dis-eat3.png')
				}],
				disIList:'',
				disBList:''
			}
		},
		components:{
			disinline:DisInline,
			disblock:DisBlock
		},
		created(){
			this.disIList=disInlineList
			this.disBList=disBlockList
		}
	}
</script>

<style scoped>
.set-margin-0{
	margin: 10px 0;
}
.goodtosee .item{
	padding: 6px;
}
.goodtosee .item p{
	font-size: 14px;
}
</style>