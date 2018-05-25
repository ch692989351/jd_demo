<template>
	<div class="goodchoice">
		<div>
		<slider :sliders="sliderList"></slider>
		</div>
		<div class="goodchoice-list">
			<div v-for="item in disInlineList">
				<disinline :resource="item"></disinline>
			</div>
			
			<disblock :resource="disBlcokList[0]"></disblock>
			<disblock :resource="disBlcokList[1]"></disblock>
			
		</div>
		
	</div>
</template>

<script>
	import Slider from './Slider'
	import DisInline from './DisInline.vue'
	import DisBlock from './DisBlock.vue'
	export default{
		name:'goodchoice',
		data(){
			return {
				sliderList: [{
					img: require('../img/dis-slider0.jpg'),
					url: ''
				}, {
					img: require('../img/dis-slider1.jpg'),
					url: ''
				}],
				disInlineList:[{
					title:'Sup自行车要价30W？还是买双涨价球鞋压压惊吧!',
					authorIcon:require('../img/dis-block-i0.png'),
					author:'get',
					img:require('../img/dis_block0.jpg'),
					flow:222
				},{
					title:'原创至上，定义中国轻奢风!',
					authorIcon:require('../img/dis-block-i1.png'),
					author:'橘子娱乐',
					img:require('../img/dis_block1.jpg'),
					flow:50
				},{
					title:'Sup自行车要价30W？还是买双涨价球鞋压压惊吧!',
					authorIcon:require('../img/dis-block-i2.png'),
					author:'妙汇App',
					img:require('../img/dis_block2.jpg'),
					flow:116
				}],
				disBlcokList:[{
					title:'盘点那些高级酒会上出现最多的礼服',
					authorIcon:require('../img/dis-block-i0.png'),
					author:'get',
					img:require('../img/disblock0.jpg'),
					flow:389
				},{
					title:'手机成本知多少？三星、苹果的水这么深!',
					authorIcon:require('../img/dis-block-i1.png'),
					author:'橘子娱乐',
					img:require('../img/disblock1.jpg'),
					flow:111111
				}]
			}
		},
		components:{
			slider:Slider,
			disinline:DisInline,
			disblock:DisBlock
		},
		methods:{
//			setSliderBoxHeight(){
//				var box=document.getElementsByClassName('slider-wrap')[0]
//				var imgH=box.getElementsByTagName('img')[0].offsetHeight
//				console.log(imgH)
//				box.style.height=imgH+'px'
//			}
		},
		mounted(){
			//this.setSliderBoxHeight()
		}
	}
</script>

<style scoped>
	.goodchoice-list{
		padding: 14px;
	}
	.goodchoice .slider-wrap{
		
	}
	.goodchoice{
		background-color: #F7F7F7
	}
</style>